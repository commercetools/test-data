import { DiscountedPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TDiscountedPriceRest = DiscountedPrice;

// TODO: Check wether the graphql version has different properties
// or types than the rest version.
// You might want to use the GraphQL Explorer for that
// (https://<merchant_center_domain>/<project_key>/graphql-explorer-commercetools/platform)
export type TDiscountedPriceGraphql = DiscountedPrice & {
  __typename: 'DiscountedPrice';
};

// TODO: Implement draft models if needed
// Otherwise remove this code
// export type TDiscountedPriceDraftRest = OrderDraft;
// export type TDiscountedPriceDraftGraphql = OrderDraft;

export type TCreateDiscountedPriceBuilder<
  TModel extends TDiscountedPriceRest | TDiscountedPriceGraphql,
  // | TDiscountedPriceDraftRest
  // | TDiscountedPriceDraftGraphql
> = () => TBuilder<TModel>;
