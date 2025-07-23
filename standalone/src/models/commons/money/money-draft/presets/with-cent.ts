import { TBuilder } from '@/core';
import type { TMoneyDraftRest, TMoneyDraftGraphql } from '../../types';
import {
  GraphQLModelBuilder,
  RestModelBuilder,
  CompatDraftModelBuilder,
} from '../builders';

export const restPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyDraftRest> =>
  RestModelBuilder().centAmount(centAmount).currencyCode(currencyCode);

export const graphqlPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyDraftGraphql> =>
  GraphQLModelBuilder().centAmount(centAmount).currencyCode(currencyCode);

export const compatPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyDraftRest | TMoneyDraftGraphql> =>
  CompatDraftModelBuilder().centAmount(centAmount).currencyCode(currencyCode);
