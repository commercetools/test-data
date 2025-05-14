import type { TBuilder } from '@/core';
import { Money } from '@/models/commons';
import { TaxPortionGraphql, TaxPortionRest } from '../../../tax-portion';
import { TaxedItemPriceGraphql, TaxedItemPriceRest } from '../../index';
import type { TTaxedItemPriceGraphql, TTaxedItemPriceRest } from '../../types';

export const restPreset = (): TBuilder<TTaxedItemPriceRest> =>
  TaxedItemPriceRest.random()
    .totalNet(Money.presets.withCurrency('EUR'))
    .totalGross(Money.presets.withCurrency('EUR'))
    .totalTax(Money.presets.withCurrency('EUR'))
    .taxPortions([TaxPortionRest.random()]);

export const graphqlPreset = (): TBuilder<TTaxedItemPriceGraphql> =>
  TaxedItemPriceGraphql.random()
    .totalNet(Money.presets.withCurrency('EUR'))
    .totalGross(Money.presets.withCurrency('EUR'))
    .totalTax(Money.presets.withCurrency('EUR'))
    .taxPortions([TaxPortionGraphql.random()]);
