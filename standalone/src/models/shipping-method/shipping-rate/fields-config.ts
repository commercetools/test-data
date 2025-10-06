import { fake, type TModelFieldsConfig } from '@/core';
import { CentPrecisionMoney } from '@/models/commons';
import type { TShippingRateRest, TShippingRateGraphql } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingrate

const commonFieldsConfig = {
  price: fake(() => CentPrecisionMoney.random()),
  tiers: [],
  freeAbove: null,
  isMatching: null,
};

export const restFieldsConfig: TModelFieldsConfig<TShippingRateRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingRateGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'ShippingRate',
  },
};
