import { DiscountedPrice } from '@commercetools/platform-sdk';
import { TReference } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TDiscountedPriceRest = DiscountedPrice;

export type TDiscountedPriceGraphql = DiscountedPrice & {
  __typename: 'DiscountedProductPriceValue';
  discountRef: TReference;
};

export type TDiscountedPriceDraftRest = TDiscountedPriceRest;
export type TDiscountedPriceDraftGraphql = TDiscountedPriceRest;

export type TCreateDiscountedPriceBuilder<
  TModel extends
    | TDiscountedPriceRest
    | TDiscountedPriceGraphql
    | TDiscountedPriceDraftRest
    | TDiscountedPriceDraftGraphql,
> = () => TBuilder<TModel>;
