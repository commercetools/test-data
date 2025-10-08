import { fake, type TModelFieldsConfig } from '@/core';
import { KeyReferenceDraft } from '@/models/commons';
import {
  ShippingRateDraftGraphql,
  ShippingRateDraftRest,
} from '../../shipping-rate/shipping-rate-draft';
import type { TZoneRateDraftRest, TZoneRateDraftGraphql } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#zoneratedraft

const commonFieldsConfig = {
  zone: fake(() => KeyReferenceDraft.presets.zone()),
};

export const restFieldsConfig: TModelFieldsConfig<TZoneRateDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    shippingRates: fake(() => [ShippingRateDraftRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TZoneRateDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
    shippingRates: fake(() => [ShippingRateDraftGraphql.random()]),
  },
};
