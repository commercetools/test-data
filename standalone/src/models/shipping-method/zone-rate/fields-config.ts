import { fake, type TModelFieldsConfig } from '@/core';
import {
  KeyReference,
  ReferenceGraphql,
  TReferenceGraphql,
} from '@/models/commons';
import { Zone } from '@/models/zone';
import { ShippingRateGraphql, ShippingRateRest } from '../shipping-rate';
import type { TZoneRateRest, TZoneRateGraphql } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#zonerate

export const restFieldsConfig: TModelFieldsConfig<TZoneRateRest> = {
  fields: {
    shippingRates: fake(() => [ShippingRateRest.random()]),
    zone: fake(() => KeyReference.random().typeId('zone')),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TZoneRateGraphql> = {
  fields: {
    shippingRates: fake(() => [ShippingRateGraphql.random()]),
    __typename: 'ZoneRate',
    zone: fake(() => Zone.random()),
    zoneRef: null,
  },
  postBuild: (model) => {
    const zoneRef: TReferenceGraphql | null = model.zone
      ? ReferenceGraphql.random().id(model.zone.id).typeId('zone').build()
      : null;

    return {
      ...model,
      zoneRef,
    };
  },
};
