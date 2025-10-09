import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import {
  ZoneRateDraftGraphql,
  ZoneRateDraftRest,
} from '../../zone-rate/zone-rate-draft';
import type {
  TShippingMethodDraftRest,
  TShippingMethodDraftGraphql,
} from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingmethoddraft

const commonFieldsConfig = {
  key: null,
  name: fake((f) => f.lorem.words(2)),
  description: null,
  localizedName: null,
  localizedDescription: null,
  active: null,
  isDefault: fake((f) => f.datatype.boolean()),
  predicate: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TShippingMethodDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    taxCategory: fake(() => ReferenceRest.random().typeId('tax-category')),
    zoneRates: fake(() => [ZoneRateDraftRest.random()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingMethodDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      taxCategory: fake(() => ReferenceGraphql.random().typeId('tax-category')),
      zoneRates: fake(() => [ZoneRateDraftGraphql.random()]),
    },
  };
