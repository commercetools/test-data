import { Money } from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type { TTaxPortionGraphql, TTaxPortionRest } from './types';

const commonFieldsConfig = {
  rate: fake((f) => f.number.float({ min: 0, max: 1 })),
  amount: fake(() => Money.random()),
  name: null,
};

export const restFieldsConfig: TModelFieldsConfig<TTaxPortionRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTaxPortionGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'TaxPortion',
  },
};
