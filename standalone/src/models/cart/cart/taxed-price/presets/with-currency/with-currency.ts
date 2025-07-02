import { TBuilder } from '@/core';
import { CentPrecisionMoney, Money } from '@/models/commons';
import { TaxPortionGraphql, TaxPortionRest } from '../../../tax-portion';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import { TTaxedPriceGraphql, TTaxedPriceRest } from '../../types';

export const restPreset = (currencyCode: string): TBuilder<TTaxedPriceRest> =>
  RestModelBuilder()
    .totalNet(CentPrecisionMoney.random().currencyCode(currencyCode))
    .totalGross(CentPrecisionMoney.random().currencyCode(currencyCode))
    .taxPortions([
      TaxPortionRest.random().amount(
        CentPrecisionMoney.random().currencyCode(currencyCode)
      ),
    ]);

export const graphqlPreset = (
  currencyCode: string
): TBuilder<TTaxedPriceGraphql> =>
  GraphqlModelBuilder()
    .totalNet(Money.presets.withCurrency(currencyCode))
    .totalGross(Money.presets.withCurrency(currencyCode))
    .taxPortions([
      TaxPortionGraphql.random().amount(
        Money.presets.withCurrency(currencyCode)
      ),
    ]);
