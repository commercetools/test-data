import {
  DiscountedPrice,
  DiscountedPriceDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TProductDiscountGraphql } from '@commercetools-test-data/product-discount';
import { TReferenceGraphql, TReferenceDraftGraphql } from '../reference/types';

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
  __typename: 'DiscountedProductPriceValue';
  discount: TReferenceDraftGraphql<'product-discount'>;
};

export type TCreateDiscountedPriceBuilder<
  TModel extends
    | TDiscountedPriceRest
    | TDiscountedPriceGraphql
    | TDiscountedPriceDraftRest
    | TDiscountedPriceDraftGraphql,
> = () => TBuilder<TModel>;
