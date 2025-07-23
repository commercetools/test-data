import { TBuilder } from '@/core';
import { Money, MoneyRest, MoneyGraphql } from '../index';
import type { TMoneyRest, TMoneyGraphql } from '../types';

export const restPreset = (currencyCode = 'USD'): TBuilder<TMoneyRest> =>
  MoneyRest.random().currencyCode(currencyCode);

export const graphqlPreset = (currencyCode = 'USD'): TBuilder<TMoneyGraphql> =>
  MoneyGraphql.random().currencyCode(currencyCode);

export const compatPreset = (
  currencyCode = 'USD'
): TBuilder<TMoneyRest | TMoneyGraphql> =>
  Money.random().currencyCode(currencyCode);
