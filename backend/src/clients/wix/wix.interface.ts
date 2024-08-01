export interface WixProduct {
  id?: string;
  name?: string;
  slug?: string;
  visible?: boolean;
  productType?: string;
  description?: string;
  stock?: Stock;
  weightRange?: WeightRangeOrPriceRangeOrCostRange;
  price?: PriceDataOrConvertedPriceDataOrPrice;
  priceData?: PriceDataOrConvertedPriceDataOrPrice;
  convertedPriceData?: PriceDataOrConvertedPriceDataOrPrice;
  priceRange?: WeightRangeOrPriceRangeOrCostRange;
  costRange?: WeightRangeOrPriceRangeOrCostRange;
  pricePerUnitData?: PricePerUnitData;
  additionalInfoSections?: AdditionalInfoSectionsEntity[] | null;
  ribbons?: RibbonsEntity[] | null;
  media?: Media;
  customTextFields?: CustomTextFieldsEntity[] | null;
  manageVariants?: boolean;
  productOptions?: ProductOptionsEntity[] | null;
  productPageUrl?: ProductPageUrl;
  numericId?: string;
  inventoryItemId?: string;
  discount?: Discount;
  collectionIds?: string[] | null;
  variants?: WixVariant[] | null;
  lastUpdated?: string;
  createdDate?: string;
  seoData?: SeoData;
  ribbon?: string;
  brand?: string;
}
export interface Stock {
  trackInventory?: boolean;
  inStock?: boolean;
  inventoryStatus?: string;
}
export interface WeightRangeOrPriceRangeOrCostRange {
  minValue?: number;
  maxValue?: number;
}
export interface PriceDataOrConvertedPriceDataOrPrice {
  currency?: string;
  price?: number;
  discountedPrice?: number;
  formatted?: Formatted;
  pricePerUnit?: number;
}
export interface Formatted {
  price?: string;
  discountedPrice?: string;
  pricePerUnit?: string;
}
export interface PricePerUnitData {
  totalQuantity?: number;
  totalMeasurementUnit?: string;
  baseQuantity?: number;
  baseMeasurementUnit?: string;
}
export interface AdditionalInfoSectionsEntity {
  title?: string;
  description?: string;
}
export interface RibbonsEntity {
  text?: string;
}
export interface Media {
  mainMedia?: ItemsEntityOrMainMedia;
  items?: ItemsEntityOrMainMedia[] | null;
}
export interface ItemsEntityOrMainMedia {
  thumbnail?: ThumbnailOrImage;
  mediaType?: string;
  title?: string;
  image?: ThumbnailOrImage;
  id?: string;
}
export interface ThumbnailOrImage {
  url?: string;
  width?: number;
  height?: number;
}
export interface CustomTextFieldsEntity {
  title?: string;
  maxLength?: number;
  mandatory?: boolean;
}
export interface ProductOptionsEntity {
  optionType?: string;
  name?: string;
  choices?: ChoicesEntity[] | null;
}
export interface ChoicesEntity {
  value?: string;
  description?: string;
  media?: Media1 | null;
  inStock?: boolean;
  visible?: boolean;
}
export interface Media1 {
  items?: null[] | null;
}
export interface ProductPageUrl {
  base?: string;
  path?: string;
}
export interface Discount {
  type?: string;
  value?: number;
}
export interface WixVariant {
  id?: string;
  choices?: Choices;
  variant?: Variant;
  price?: number;
}
export interface Choices {
  Size?: string;
  Color?: string;
}
export interface Variant {
  priceData?: PriceDataOrConvertedPriceDataOrPrice;
  convertedPriceData?: PriceDataOrConvertedPriceDataOrPrice;
  costAndProfitData?: CostAndProfitData;
  weight?: number;
  sku?: string;
  visible?: boolean;
}
export interface CostAndProfitData {
  itemCost?: number;
  formattedItemCost?: string;
  profit?: number;
  formattedProfit?: string;
  profitMargin?: number;
}
export interface SeoData {
  tags?: TagsEntity[] | null;
}
export interface TagsEntity {
  type?: string;
  children?: string;
  custom?: boolean;
  disabled?: boolean;
  props?: Props | null;
}
export interface Props {
  name?: string;
  content?: string;
}
