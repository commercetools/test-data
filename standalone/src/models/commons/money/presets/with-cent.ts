import { TBuilder } from '@/core';
import {
  GraphQLModelBuilder,
  RestModelBuilder,
  CompatModelBuilder,
} from '../builders';
import type { TMoneyRest, TMoneyGraphql } from '../types';

export const restPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyRest> =>
  RestModelBuilder().centAmount(centAmount).currencyCode(currencyCode);

export const graphqlPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyGraphql> =>
  GraphQLModelBuilder().centAmount(centAmount).currencyCode(currencyCode);

export const compatPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyRest | TMoneyGraphql> =>
  CompatModelBuilder().centAmount(centAmount).currencyCode(currencyCode);
