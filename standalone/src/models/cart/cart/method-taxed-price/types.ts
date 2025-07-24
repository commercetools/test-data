import { MethodTaxedPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpMethodTaxedPrice } from '@/graphql-types';

export type TMethodTaxedPriceRest = MethodTaxedPrice;
export type TMethodTaxedPriceGraphql = TCtpMethodTaxedPrice;

export type TCreateMethodTaxedPriceBuilder<
  TModel extends TMethodTaxedPriceRest | TMethodTaxedPriceGraphql,
> = () => TBuilder<TModel>;
