import { fake, type TModelFieldsConfig } from '@/core';
import { MoneyRest } from '@/models/commons';
import type {
  TCartScorePriceTierGraphql,
  TCartScorePriceTierRest,
} from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#cartscoretier

const commonFieldsConfig = {
  type: 'CartScore',
  price: fake(() => MoneyRest.random()),
  score: fake((f) => f.number.int({ min: 1, max: 15 })),
  isMatching: fake((f) => f.datatype.boolean()),
  priceFunction: null,
};

export const restFieldsConfig: TModelFieldsConfig<TCartScorePriceTierRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCartScorePriceTierGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CartScorePriceTier',
    },
  };
