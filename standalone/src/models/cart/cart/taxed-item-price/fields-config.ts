import { fake, type TModelFieldsConfig } from '@/core';
import { Money } from '@/models/commons';
import { TaxPortionGraphql, TaxPortionRest } from '../tax-portion';
import type { TTaxedItemPriceGraphql, TTaxedItemPriceRest } from './types';

const commonFieldsConfig = {
  totalNet: fake(() => Money.random()),
  totalGross: fake(() => Money.random()),
  totalTax: null,
};

export const restFieldsConfig: TModelFieldsConfig<TTaxedItemPriceRest> = {
  fields: {
    ...commonFieldsConfig,
    taxPortions: fake(() => [TaxPortionRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTaxedItemPriceGraphql> = {
  fields: {
    ...commonFieldsConfig,
    taxPortions: fake(() => [TaxPortionGraphql.random()]),
    __typename: 'TaxedItemPrice',
  },
};
