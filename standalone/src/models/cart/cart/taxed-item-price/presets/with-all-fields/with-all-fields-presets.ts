import type { TBuilder } from '@/core';
import { Money } from '@/models/commons';
import { TaxPortionGraphql, TaxPortionRest } from '../../../tax-portion';
import { TaxedItemPriceGraphql, TaxedItemPriceRest } from '../../index';
import type { TTaxedItemPriceGraphql, TTaxedItemPriceRest } from '../../types';

export const restPreset = (
  currencyCode = 'EUR'
): TBuilder<TTaxedItemPriceRest> =>
  TaxedItemPriceRest.random()
    .totalNet(Money.presets.withCurrency(currencyCode))
    .totalGross(Money.presets.withCurrency(currencyCode))
    .totalTax(Money.presets.withCurrency(currencyCode))
    .taxPortions([
      TaxPortionRest.random().amount(Money.presets.withCurrency(currencyCode)),
    ]);

export const graphqlPreset = (
  currencyCode = 'EUR'
): TBuilder<TTaxedItemPriceGraphql> =>
  TaxedItemPriceGraphql.random()
    .totalNet(Money.presets.withCurrency(currencyCode))
    .totalGross(Money.presets.withCurrency(currencyCode))
    .totalTax(Money.presets.withCurrency(currencyCode))
    .taxPortions([
      TaxPortionGraphql.random().amount(
        Money.presets.withCurrency(currencyCode)
      ),
    ]);
