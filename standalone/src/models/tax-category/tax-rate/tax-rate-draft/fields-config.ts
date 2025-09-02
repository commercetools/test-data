import { fake, TModelFieldsConfig } from '@/core';
import { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../types';

const commonFieldsConfig = {
  amount: 1,
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
