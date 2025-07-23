import { TBuilder } from '@/core';
import {
  GraphQLModelBuilder,
  RestModelBuilder,
  CompatModelBuilder,
} from '../builders';
import type { TMoneyRest, TMoneyGraphql } from '../types';

export const restPreset = (currencyCode = 'USD'): TBuilder<TMoneyRest> =>
  RestModelBuilder().currencyCode(currencyCode);

export const graphqlPreset = (currencyCode = 'USD'): TBuilder<TMoneyGraphql> =>
  GraphQLModelBuilder().currencyCode(currencyCode);

export const compatPreset = (
  currencyCode = 'USD'
): TBuilder<TMoneyRest | TMoneyGraphql> =>
  CompatModelBuilder().currencyCode(currencyCode);
