import { TBuilder } from '@/core';
import type { TMoneyDraftRest, TMoneyDraftGraphql } from '../../../types';
import { MoneyDraft, MoneyDraftRest, MoneyDraftGraphql } from '../../index';

export const restPreset = (): TBuilder<TMoneyDraftRest> =>
  MoneyDraftRest.random().currencyCode('USD');

export const graphqlPreset = (): TBuilder<TMoneyDraftGraphql> =>
  MoneyDraftGraphql.random().currencyCode('USD');

export const compatPreset = (): TBuilder<
  TMoneyDraftRest | TMoneyDraftGraphql
> => MoneyDraft.random().currencyCode('USD');
