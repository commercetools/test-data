import { TBuilder } from '@/core';
import { Money, MoneyRest, MoneyGraphql } from '../../index';
import type { TMoneyRest, TMoneyGraphql } from '../../types';

export const restPreset = (): TBuilder<TMoneyRest> =>
  MoneyRest.random().currencyCode('USD');

export const graphqlPreset = (): TBuilder<TMoneyGraphql> =>
  MoneyGraphql.random().currencyCode('USD');

export const compatPreset = (): TBuilder<TMoneyRest | TMoneyGraphql> =>
  Money.random().currencyCode('USD');
