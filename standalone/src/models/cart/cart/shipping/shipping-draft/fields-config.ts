import { fake, type TModelFieldsConfig } from '@/core';
import { AddressDraft, ReferenceDraft } from '@/models/commons';
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
      ReferenceDraft.random().typeId('shipping-method')
    ),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
    shippingMethod: fake(() =>
      ReferenceDraft.random().typeId('shipping-method')
    ),
  },
};
