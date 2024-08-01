import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PriceDataDto {
  @ApiProperty()
  price?: number;

  @ApiPropertyOptional()
  currency?: string;
}

export class ProductVariantChoiceDto {
  @ApiPropertyOptional()
  Color?: string;

  @ApiPropertyOptional()
  Size?: string;
}

export class ProductVariantDto {
  @ApiProperty()
  choices?: ProductVariantChoiceDto;

  @ApiProperty()
  sku?: string;

  @ApiProperty()
  price?: number;
}

export class ProductDto {
  @ApiPropertyOptional()
  id?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  productType?: string;

  @ApiProperty()
  priceData?: PriceDataDto;

  @ApiPropertyOptional()
  variants?: ProductVariantDto[];
}
