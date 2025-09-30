import { fake, type TModelFieldsConfig } from '@/core';
import {
  KeyReference,
  ReferenceGraphql,
  TReferenceGraphql,
} from '@/models/commons';
import { ShippingRateRest } from '../shipping-rate';
import type { TZoneRateRest, TZoneRateGraphql } from './types';

const commonFieldsConfig = {
  zone: fake(() => KeyReference.random().typeId('zone')),
  shippingRates: fake(() => [ShippingRateRest.random()]),
};

export const restFieldsConfig: TModelFieldsConfig<TZoneRateRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TZoneRateGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'ZoneRate',
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
