import {
  DiscountedPrice,
  DiscountedPriceDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TProductDiscountGraphql,
  TProductDiscountDraftGraphql,
} from '@commercetools-test-data/product-discount';
import { TReferenceGraphql } from '../reference/types';

export type TDiscountedPriceRest = DiscountedPrice;

export type TDiscountedPriceGraphql = Omit<TDiscountedPriceRest, 'discount'> & {
  __typename: 'DiscountedProductPriceValue';
  discount: TProductDiscountGraphql;
  discountRef: TReferenceGraphql<'product-discount'>;
};

export type TDiscountedPriceDraftRest = DiscountedPriceDraft;
export type TDiscountedPriceDraftGraphql = Omit<
  DiscountedPriceDraft,
  'discount'
> & {
  discount: TProductDiscountDraftGraphql;
  __typename: 'DiscountedProductPriceValue';
};

export type TCreateDiscountedPriceBuilder<
  TModel extends
    | TDiscountedPriceRest
    | TDiscountedPriceGraphql
    | TDiscountedPriceDraftRest
    | TDiscountedPriceDraftGraphql,
> = () => TBuilder<TModel>;
