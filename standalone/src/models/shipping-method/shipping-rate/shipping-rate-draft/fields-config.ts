import { fake, type TModelFieldsConfig } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import { CartScorePriceTierDraftRest } from '../shipping-rate-price-tier/cart-score';
import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingratedraft

const commonFieldsConfig = {
  price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
  freeAbove: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
  tiers: [],
};

export const restFieldsConfig: TModelFieldsConfig<TShippingRateDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingRateDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
