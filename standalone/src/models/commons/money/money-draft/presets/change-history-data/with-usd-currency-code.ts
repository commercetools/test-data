import { TBuilder } from '@/core';
import type { TMoneyDraftRest, TMoneyDraftGraphql } from '../../../types';
import {
  GraphQLModelBuilder,
  RestModelBuilder,
  CompatDraftModelBuilder,
} from '../../builders';

export const restPreset = (): TBuilder<TMoneyDraftRest> =>
  RestModelBuilder().currencyCode('USD');

export const graphqlPreset = (): TBuilder<TMoneyDraftGraphql> =>
  GraphQLModelBuilder().currencyCode('USD');

export const compatPreset = (): TBuilder<
  TMoneyDraftRest | TMoneyDraftGraphql
> => CompatDraftModelBuilder().currencyCode('USD');
