import { fake, TModelFieldsConfig } from '@/core';
import { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../types';

const commonFieldsConfig = {
  amount: null,
  country: fake((f) => f.location.countryCode()),
  includedInPrice: fake((f) => f.datatype.boolean()),
  key: null,
  name: fake((f) => f.lorem.words(2)),
  state: null,
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
