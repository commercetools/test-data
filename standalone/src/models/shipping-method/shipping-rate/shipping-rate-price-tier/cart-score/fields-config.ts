import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TCartScorePriceTierGraphql,
  TCartScorePriceTierRest,
} from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#cartscoretier

const commonFieldsConfig = {
  type: 'CartScore',
  score: fake((f) => f.number.int({ min: 1, max: 15 })),
  price: null,
  priceFunction: null,
  isMatching: null,
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
      __typename: 'ShippingRateCartScorePriceTier',
    },
  };
