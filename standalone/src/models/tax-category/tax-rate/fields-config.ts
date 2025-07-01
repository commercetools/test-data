import { fake, TModelFieldsConfig } from '@/core';
import { TTaxRateGraphql, TTaxRateRest } from './types';

const commonFieldsConfig = {
  amount: fake((f) => Number(f.finance.amount({ min: 0, max: 1, dec: 3 }))),
  country: fake((f) => f.location.countryCode()),
  id: null,
  includedInPrice: fake(() => true),
  key: null,
  name: fake((f) => f.lorem.words(2)),
  state: null,
};

export const restFieldsConfig: TModelFieldsConfig<TTaxRateRest> = {
  fields: {
    ...commonFieldsConfig,
    subRates: null,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTaxRateGraphql> = {
  fields: {
    ...commonFieldsConfig,
    subRates: [],
    __typename: 'TaxRate',
  },
};
