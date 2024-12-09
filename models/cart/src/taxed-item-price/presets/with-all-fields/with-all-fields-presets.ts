import { Money } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TaxedItemPriceGraphql, TaxedItemPriceRest } from '../..';
import { TaxPortionGraphql, TaxPortionRest } from '../../../tax-portion';
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
