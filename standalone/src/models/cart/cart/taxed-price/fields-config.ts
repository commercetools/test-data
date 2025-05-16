import { fake, type TModelFieldsConfig } from '@/core';
import { CentPrecisionMoney, Money } from '@/models/commons';
import { TaxPortionRest, TaxPortionGraphql } from '../tax-portion';
import type { TTaxedPriceGraphql, TTaxedPriceRest } from './types';

export const restFieldsConfig: TModelFieldsConfig<TTaxedPriceRest> = {
  fields: {
    totalNet: fake(() => CentPrecisionMoney.random()),
    totalGross: fake(() => CentPrecisionMoney.random()),
    taxPortions: fake(() => [TaxPortionRest.random()]),
    totalTax: null,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTaxedPriceGraphql> = {
  fields: {
    totalNet: fake(() => Money.random()),
    totalGross: fake(() => Money.random()),
    taxPortions: fake(() => [TaxPortionGraphql.random()]),
    totalTax: null,
    __typename: 'TaxedPrice',
  },
};
