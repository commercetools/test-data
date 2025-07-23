import { TBuilder } from '@/core';
import {
  GraphQLModelBuilder,
  RestModelBuilder,
  CompatModelBuilder,
} from '../../builders';
import type { TMoneyRest, TMoneyGraphql } from '../../types';

export const restPreset = (): TBuilder<TMoneyRest> =>
  RestModelBuilder().currencyCode('USD');

export const graphqlPreset = (): TBuilder<TMoneyGraphql> =>
  GraphQLModelBuilder().currencyCode('USD');

export const compatPreset = (): TBuilder<TMoneyRest | TMoneyGraphql> =>
  CompatModelBuilder().currencyCode('USD');
