export interface Product {
  id?: string;
  name?: string;
  slug?: string;
  visible?: boolean;
  productType?: string;
  description?: string;
  weightRange?: WeightRange;
  stock?: Stock;
  price?: Price;
  priceData: PriceData;
  convertedPriceData?: ConvertedPriceData;
  priceRange?: PriceRange;
  costRange?: CostRange;
  sku?: string;
  additionalInfoSections?: any[];
  ribbons?: any[];
  media?: Media;
  customTextFields?: any[];
  manageVariants?: boolean;
  productOptions?: ProductOption[];
  productPageUrl?: ProductPageUrl;
  numericId?: string;
  inventoryItemId?: string;
  discount?: Discount;
  collectionIds?: string[];
  variants: Variant[];
  lastUpdated?: string;
  createdDate?: string;
  ribbon?: string;
  exportProductId?: string;
}

export interface WeightRange {
  minValue?: number;
  maxValue?: number;
}

export interface Stock {
  trackInventory?: boolean;
  inStock?: boolean;
  inventoryStatus?: string;
}

export interface Price {
  currency?: string;
  price?: number;
  discountedPrice?: number;
  formatted?: Formatted;
}

export interface Formatted {
  price?: string;
  discountedPrice?: string;
}

export interface PriceData {
  currency?: string;
  price?: number;
  discountedPrice?: number;
  formatted?: Formatted2;
}

export interface Formatted2 {
  price?: string;
  discountedPrice?: string;
}

export interface ConvertedPriceData {
  currency?: string;
  price?: number;
  discountedPrice?: number;
  formatted?: Formatted3;
}

export interface Formatted3 {
  price?: string;
  discountedPrice?: string;
}

export interface PriceRange {
  minValue?: number;
  maxValue?: number;
}

export interface CostRange {
  minValue?: number;
  maxValue?: number;
}

export interface Media {
  items?: any[];
}

export interface ProductOption {
  optionType?: string;
  name?: string;
  choices?: Choice[];
}

export interface Choice {
  value?: string;
  description?: string;
  inStock?: boolean;
  visible?: boolean;
}

export interface ProductPageUrl {
  base?: string;
  path?: string;
}

export interface Discount {
  type?: string;
  value?: number;
}

export interface Variant {
  id?: string;
  choices?: Choices;
  price: string;
  sku?: string;
  visible?: boolean;
  variant?: any;
}

export interface Choices {
  Size?: string;
  Color?: string;
}
