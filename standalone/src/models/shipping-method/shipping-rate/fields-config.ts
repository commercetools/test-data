import { fake, type TModelFieldsConfig } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import { CartScorePriceTierDraftRest } from './shipping-rate-price-tier/cart-score';
import type { TShippingRateRest, TShippingRateGraphql } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingrate

const commonFieldsConfig = {
  price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
  freeAbove: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
  tiers: fake(() => [CartScorePriceTierDraftRest.random()]),
  isMatching: fake((f) => f.datatype.boolean()),
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
