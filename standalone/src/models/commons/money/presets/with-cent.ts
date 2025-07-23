import { TBuilder } from '@/core';
import { Money, MoneyRest, MoneyGraphql } from '../index';
import type { TMoneyRest, TMoneyGraphql } from '../types';

export const restPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyRest> =>
  MoneyRest.random().centAmount(centAmount).currencyCode(currencyCode);

export const graphqlPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyGraphql> =>
  MoneyGraphql.random().centAmount(centAmount).currencyCode(currencyCode);

export const compatPreset = (
  centAmount = 10,
  currencyCode = 'USD'
): TBuilder<TMoneyRest | TMoneyGraphql> =>
  Money.random().centAmount(centAmount).currencyCode(currencyCode);
