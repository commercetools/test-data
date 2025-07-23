import { TBuilder } from '@/core';
import type { TMoneyDraftRest, TMoneyDraftGraphql } from '../../types';
import {
  GraphQLModelBuilder,
  RestModelBuilder,
  CompatDraftModelBuilder,
} from '../builders';

export const restPreset = (currencyCode = 'USD'): TBuilder<TMoneyDraftRest> =>
  RestModelBuilder().currencyCode(currencyCode);

export const graphqlPreset = (
  currencyCode = 'USD'
): TBuilder<TMoneyDraftGraphql> =>
  GraphQLModelBuilder().currencyCode(currencyCode);

export const compatPreset = (
  currencyCode = 'USD'
): TBuilder<TMoneyDraftRest | TMoneyDraftGraphql> =>
  CompatDraftModelBuilder().currencyCode(currencyCode);
