import { MethodTaxRate } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpMethodTaxRate } from '@/graphql-types';

export type TMethodTaxRateRest = MethodTaxRate;
export type TMethodTaxRateGraphql = TCtpMethodTaxRate;

export type TCreateMethodTaxRateBuilder<
  TModel extends TMethodTaxRateRest | TMethodTaxRateGraphql,
> = () => TBuilder<TModel>;
