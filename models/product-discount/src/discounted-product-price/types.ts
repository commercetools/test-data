import {
  DiscountedPrice,
  DiscountedPriceDraft,
} from '@commercetools/platform-sdk';
import {
  THighPrecisionMoneyDraftGraphql,
  THighPrecisionMoneyGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  TProductDiscountDraftGraphql,
  TProductDiscountGraphql,
} from '../product-discount';

export type TDiscountedProductPriceRest = DiscountedPrice;

export type TDiscountedProductPriceGraphql = {
  value: THighPrecisionMoneyGraphql;
  discount: TProductDiscountGraphql;
  discountRef: TReferenceGraphql;
  __typename: 'DiscountedProductPrice';
};

export type TDiscountedProductPriceDraft = DiscountedPriceDraft;

export type TDiscountedProductPriceDraftGraphql = {
  value: THighPrecisionMoneyDraftGraphql;
  discount: TProductDiscountDraftGraphql;
  __typename: 'DiscountedProductPriceDraft';
};

export type TDiscountedProductPriceBuilder =
  TBuilder<TDiscountedProductPriceRest>;
export type TCreateDiscountedPriceBuilder =
  () => TDiscountedProductPriceBuilder;
export type TDiscountedProductPriceDraftBuilder =
  TBuilder<TDiscountedProductPriceDraft>;
export type TCreateDiscountedPriceDraftBuilder =
  () => TDiscountedProductPriceDraftBuilder;
