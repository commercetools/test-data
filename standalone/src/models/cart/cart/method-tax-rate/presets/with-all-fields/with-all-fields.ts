import type { TBuilder } from '@/core';
import { TaxRateGraphql, TaxRateRest } from '@/models/tax-category';
import { MethodTaxRateGraphql, MethodTaxRateRest } from '../../index';
import type { TMethodTaxRateGraphql, TMethodTaxRateRest } from '../../types';

export const restPreset = (): TBuilder<TMethodTaxRateRest> =>
  MethodTaxRateRest.random().taxRate(TaxRateRest.random());

export const graphqlPreset = (): TBuilder<TMethodTaxRateGraphql> =>
  MethodTaxRateGraphql.random().taxRate(TaxRateGraphql.random());
