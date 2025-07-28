import type { TBuilder } from '@/core';
import { MoneyGraphql, MoneyRest } from '@/models/commons';
import { TaxPortionGraphql, TaxPortionRest } from '../../../tax-portion';
import { TaxedItemPriceGraphql, TaxedItemPriceRest } from '../../index';
import type { TTaxedItemPriceGraphql, TTaxedItemPriceRest } from '../../types';

export const restPreset = (
  currencyCode = 'EUR'
): TBuilder<TTaxedItemPriceRest> =>
  TaxedItemPriceRest.random()
    .totalNet(MoneyRest.presets.withCurrency(currencyCode))
    .totalGross(MoneyRest.presets.withCurrency(currencyCode))
    .totalTax(MoneyRest.presets.withCurrency(currencyCode))
    .taxPortions([
      TaxPortionRest.random().amount(
        MoneyRest.presets.withCurrency(currencyCode)
      ),
    ]);

export const graphqlPreset = (
  currencyCode = 'EUR'
): TBuilder<TTaxedItemPriceGraphql> =>
  TaxedItemPriceGraphql.random()
    .totalNet(MoneyGraphql.presets.withCurrency(currencyCode))
    .totalGross(MoneyGraphql.presets.withCurrency(currencyCode))
    .totalTax(MoneyGraphql.presets.withCurrency(currencyCode))
    .taxPortions([
      TaxPortionGraphql.random().amount(
        MoneyGraphql.presets.withCurrency(currencyCode)
      ),
    ]);
