import { Inject, Injectable, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { WixProduct, WixVariant } from './wix.interface';
import { ConfigType } from '@nestjs/config';
import wixConfig from './wix.config';
import { WixClientError } from './wix.error';
import { ProductVariantDto } from 'src/modules/product/product.dto';
import { DEFAULT_PRODUCT_OPTIONS } from './wix.constant';

/*
 * WixClient is a service that interacts with the Wix Store API.
 * Wix Api documentation: https://dev.wix.com/docs/rest/business-solutions/stores/catalog/introduction
 */
@Injectable()
export class WixClient {
  constructor(
    @Inject(wixConfig.KEY)
    private readonly config: ConfigType<typeof wixConfig>,
  ) {}

  private readonly logger = new Logger(WixClient.name);

  axios: AxiosInstance = axios.create({
    baseURL: 'https://www.wixapis.com/stores/v1',
    headers: {
      'Content-Type': 'application/json',
      Authorization: this.config.apiKey,
      'wix-site-id': this.config.siteId,
    },
  });

  async getProduct(id: string): Promise<WixProduct> {
    try {
      const response = await this.axios.get(`/products/${id}`);
      return {
        ...response.data.product,
        variants: this.convertVariants(response.data.product.variants),
      };
    } catch (error) {
      this.mapAndThrowError(error);
    }
  }

  /*
   *  Could be used to query products by price, for example:
   *    query: {
   *      filter: '{"price": "20"}',
   *    },
   */
  async queryProducts(): Promise<WixProduct[]> {
    try {
      const response = await this.axios.post('/products/query', {
        includeVariants: true,
      });
      return response.data.products;
    } catch (error) {
      this.mapAndThrowError(error);
    }
  }

  async createProduct(product: WixProduct): Promise<WixProduct> {
    try {
      product.manageVariants = true;
      product.productOptions = DEFAULT_PRODUCT_OPTIONS;
      const response = await this.axios.post('/products', {
        product: product,
      });
      return response.data.product;
    } catch (error) {
      this.mapAndThrowError(error);
    }
  }

  async updateProduct(id: string, product: WixProduct): Promise<WixProduct> {
    try {
      const response = await this.axios.patch(`/products/${id}`, {
        product: product,
      });
      return response.data.product;
    } catch (error) {
      this.mapAndThrowError(error);
    }
  }

  async updateProductVariations(
    id: string,
    variations: WixVariant[],
  ): Promise<ProductVariantDto[]> {
    try {
      const response = await this.axios.patch(`/products/${id}/variants`, {
        variants: variations.map((variant) => ({
          ...variant,
          choices: undefined,
          variantIds: [variant.id],
        })),
      });
      return this.convertVariants(response.data.variants);
    } catch (error) {
      this.mapAndThrowError(error);
    }
  }

  async deleteProduct(id: string): Promise<void> {
    try {
      await this.axios.delete(`/products/${id}`);
    } catch (error) {
      this.mapAndThrowError(error);
    }
  }

  private mapAndThrowError(error: any): void {
    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 400:
          throw new Error(WixClientError.BAD_REQUEST);
        case 401:
          throw new Error(WixClientError.NOT_AUTHORIZED);
        case 404:
          throw new Error(WixClientError.NOT_FOUND);
        default:
          throw new Error(WixClientError.INTERNAL_SERVER_ERROR);
      }
    } else {
      this.logger.error(error.message, error.stack);
      throw new Error(WixClientError.INTERNAL_SERVER_ERROR);
    }
  }

  private convertVariants(variants: WixVariant[]): ProductVariantDto[] {
    return variants.map((variant): ProductVariantDto => {
      return {
        id: variant.id,
        choices: {
          Size: variant.choices.Size,
          Color: variant.choices.Color,
        },
        price: variant.variant.priceData.price,
        sku: variant.variant.sku,
        visible: variant.variant.visible,
      };
    });
  }
}
