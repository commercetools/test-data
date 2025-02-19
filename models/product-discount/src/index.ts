// Export types
export * from './discounted-price/types';
export * from './product-discount/types';
export * from './product-discount-value-absolute/types';
export * from './product-discount-value-external/types';
export * from './product-discount-value-relative/types';

// Export models
export {
  DiscountedPriceRest,
  DiscountedPriceGraphql,
  DiscountedPriceDraftRest,
  DiscountedPriceDraftGraphql,
} from './discounted-price';

export * as ProductDiscount from './product-discount';
export * as ProductDiscountDraft from './product-discount/product-discount-draft';

export * as ProductDiscountValueAbsolute from './product-discount-value-absolute';
export * as ProductDiscountValueAbsoluteDraft from './product-discount-value-absolute/product-discount-value-absolute-draft';

export * as ProductDiscountValueExternal from './product-discount-value-external';
export * as ProductDiscountValueExternalDraft from './product-discount-value-external/product-discount-value-external-draft';

export * as ProductDiscountValueRelative from './product-discount-value-relative';
export * as ProductDiscountValueRelativeDraft from './product-discount-value-relative/product-discount-value-relative-draft';
