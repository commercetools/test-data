import { TBuilder } from '@/core';
import type { TMoneyDraftRest, TMoneyDraftGraphql } from '../../types';
import { MoneyDraft, MoneyDraftRest, MoneyDraftGraphql } from '../index';

export const restPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyDraftRest> =>
  MoneyDraftRest.random().centAmount(centAmount).currencyCode(currencyCode);

export const graphqlPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyDraftGraphql> =>
  MoneyDraftGraphql.random().centAmount(centAmount).currencyCode(currencyCode);

export const compatPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyDraftRest | TMoneyDraftGraphql> =>
  MoneyDraft.random().centAmount(centAmount).currencyCode(currencyCode);
