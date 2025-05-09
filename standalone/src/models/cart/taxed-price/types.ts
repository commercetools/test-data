import { TaxedPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpTaxedPrice } from '../../../graphql-types';

export type TTaxedPriceRest = TaxedPrice;
export type TTaxedPriceGraphql = TCtpTaxedPrice;

export type TCreateTaxedPriceBuilder<
  TModel extends TTaxedPriceRest | TTaxedPriceGraphql,
> = () => TBuilder<TModel>;
