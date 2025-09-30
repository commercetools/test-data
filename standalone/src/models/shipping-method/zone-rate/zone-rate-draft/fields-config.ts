import { fake, type TModelFieldsConfig } from '@/core';
import { KeyReferenceDraft } from '@/models/commons';
import { ShippingRateDraftRest } from '../../shipping-rate/shipping-rate-draft';
import type { TZoneRateDraftRest, TZoneRateDraftGraphql } from '../types';

const commonFieldsConfig = {
  zone: fake(() => KeyReferenceDraft.presets.zone()),
  shippingRates: fake(() => [ShippingRateDraftRest.random()]),
};

export const restFieldsConfig: TModelFieldsConfig<TZoneRateDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TZoneRateDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};
