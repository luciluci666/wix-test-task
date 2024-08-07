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
  @ApiPropertyOptional()
  id?: string;

  @ApiProperty()
  choices?: ProductVariantChoiceDto;

  @ApiProperty()
  sku?: string;

  @ApiProperty()
  price?: number;

  @ApiProperty()
  visible?: boolean;
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
