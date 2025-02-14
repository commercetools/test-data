import {
  DiscountedPrice,
  DiscountedPriceDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TCtpDiscountedProductPriceValue,
  TCtpDiscountedProductPriceValueInput,
} from '@commercetools-test-data/graphql-types';

export type TDiscountedPriceRest = DiscountedPrice;

export type TDiscountedPriceGraphql = TCtpDiscountedProductPriceValue;

export type TDiscountedPriceDraftRest = DiscountedPriceDraft;
export type TDiscountedPriceDraftGraphql = TCtpDiscountedProductPriceValueInput;

export type TCreateDiscountedPriceBuilder<
  TModel extends
    | TDiscountedPriceRest
    | TDiscountedPriceGraphql
    | TDiscountedPriceDraftRest
    | TDiscountedPriceDraftGraphql,
> = () => TBuilder<TModel>;
