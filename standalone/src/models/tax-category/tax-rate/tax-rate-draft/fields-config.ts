import { fake, TModelFieldsConfig } from '@/core';
import { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../types';

const commonFieldsConfig = {
  amount: fake((f) => Number(f.finance.amount({ min: 0, max: 1, dec: 3 }))),
  country: fake((f) => f.location.countryCode()),
  includedInPrice: fake((f) => f.datatype.boolean()),
  key: fake((f) => f.lorem.slug(2)),
  name: fake((f) => f.lorem.words(2)),
  state: fake((f) => f.lorem.words(2)),
  subRates: null,
};

export const restFieldsConfig: TModelFieldsConfig<TTaxRateDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTaxRateDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};
