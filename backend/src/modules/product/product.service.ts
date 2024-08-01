import { Injectable } from '@nestjs/common';
import { WixClient } from 'src/clients/wix/wix.client';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly wixClient: WixClient) {}

  async getProduct(id: string): Promise<ProductDto> {
    return await this.wixClient.getProduct(id);
  }

  async getProducts(): Promise<ProductDto[]> {
    return await this.wixClient.queryProducts();
  }

  async createProduct(product: ProductDto): Promise<ProductDto> {
    const newProduct = await this.wixClient.createProduct(product);
    console.log(product);
    if (product.variants?.length) {
      setTimeout(() => {
        this.wixClient.updateProductVariations(newProduct.id, product.variants);
      }, 5e3);
    }

    return newProduct;
  }

  async updateProduct(id: string, product: ProductDto): Promise<ProductDto> {
    const updatedProduct = await this.wixClient.updateProduct(id, product);

    if (product.variants?.length) {
      updatedProduct.variants = await this.wixClient.updateProductVariations(
        id,
        product.variants,
      );
    }

    return updatedProduct;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.wixClient.deleteProduct(id);
  }
}
