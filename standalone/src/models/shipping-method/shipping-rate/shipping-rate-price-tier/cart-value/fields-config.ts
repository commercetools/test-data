import { fake, type TModelFieldsConfig } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import type {
  TCartValuePriceTierGraphql,
  TCartValuePriceTierRest,
} from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#cartvaluetier

const commonFieldsConfig = {
  type: 'CartValue',
  price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
  minimumCentAmount: fake((f) => f.number.int({ min: 1000, max: 5000 })),
  isMatching: fake((f) => f.datatype.boolean()),
};

export const restFieldsConfig: TModelFieldsConfig<TCartValuePriceTierRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCartValuePriceTierGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CartValuePriceTier',
    },
  };
