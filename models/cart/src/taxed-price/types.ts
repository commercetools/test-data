import { TaxedPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpTaxedPrice } from '@commercetools-test-data/graphql-types';

export type TTaxedPriceRest = TaxedPrice;
export type TTaxedPriceGraphql = TCtpTaxedPrice;

export type TCreateTaxedPriceBuilder<
  TModel extends TTaxedPriceRest | TTaxedPriceGraphql,
> = () => TBuilder<TModel>;
