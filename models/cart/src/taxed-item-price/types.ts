import { TaxedItemPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpTaxedItemPrice } from '@commercetools-test-data/graphql-types';

export type TTaxedItemPriceRest = TaxedItemPrice;

export type TTaxedItemPriceGraphql = TCtpTaxedItemPrice;

export type TCreateTaxedItemPriceBuilder<
  TModel extends TTaxedItemPriceRest | TTaxedItemPriceGraphql,
> = () => TBuilder<TModel>;
