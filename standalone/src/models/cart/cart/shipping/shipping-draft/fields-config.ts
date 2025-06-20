import { fake, type TModelFieldsConfig } from '@/core';
import {
  AddressDraft,
  ReferenceDraftGraphql,
  ReferenceDraftRest,
} from '@/models/commons';
import type { TShippingDraftGraphql, TShippingDraftRest } from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  shippingAddress: fake(() => AddressDraft.random()),
  shippingRateInput: null,
  externalTaxRate: null,
  deliveries: [],
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TShippingDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    shippingMethod: fake(() =>
      ReferenceDraftRest.presets.shippingMethodReference()
    ),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
    shippingMethod: fake(() =>
      ReferenceDraftGraphql.presets.shippingMethodReference()
    ),
  },
};
