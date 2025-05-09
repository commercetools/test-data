import { TaxedItemPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpTaxedItemPrice } from '../../../graphql-types';

export type TTaxedItemPriceRest = TaxedItemPrice;

export type TTaxedItemPriceGraphql = TCtpTaxedItemPrice;

export type TCreateTaxedItemPriceBuilder<
  TModel extends TTaxedItemPriceRest | TTaxedItemPriceGraphql,
> = () => TBuilder<TModel>;
