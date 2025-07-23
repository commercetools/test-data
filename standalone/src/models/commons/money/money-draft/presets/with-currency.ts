import { TBuilder } from '@/core';
import type { TMoneyDraftRest, TMoneyDraftGraphql } from '../../types';
import { MoneyDraft, MoneyDraftRest, MoneyDraftGraphql } from '../index';

export const restPreset = (currencyCode = 'USD'): TBuilder<TMoneyDraftRest> =>
  MoneyDraftRest.random().currencyCode(currencyCode);

export const graphqlPreset = (
  currencyCode = 'USD'
): TBuilder<TMoneyDraftGraphql> =>
  MoneyDraftGraphql.random().currencyCode(currencyCode);

export const compatPreset = (
  currencyCode = 'USD'
): TBuilder<TMoneyDraftRest | TMoneyDraftGraphql> =>
  MoneyDraft.random().currencyCode(currencyCode);
