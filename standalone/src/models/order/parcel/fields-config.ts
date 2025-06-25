import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { DeliveryItemRest, DeliveryItemGraphql } from '../delivery-item';
import {
  ParcelMeasurementsRest,
  ParcelMeasurementsGraphql,
} from '../parcel-measurements';
import { TrackingDataRest, TrackingDataGraphql } from '../tracking-data';
import { TParcelRest, TParcelGraphql } from './types';

const [getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  key: null,
  custom: null,
  createdAt: fake(getOlderDate),
};

export const restFieldsConfig: TModelFieldsConfig<TParcelRest> = {
  fields: {
    ...commonFieldsConfig,
    measurements: fake(() => ParcelMeasurementsRest.random().build()),
    trackingData: fake(() => TrackingDataRest.random().build()),
    items: [fake(() => DeliveryItemRest.random().build())],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TParcelGraphql> = {
  fields: {
    ...commonFieldsConfig,
    measurements: fake(() => ParcelMeasurementsGraphql.random().build()),
    trackingData: fake(() => TrackingDataGraphql.random().build()),
    items: [fake(() => DeliveryItemGraphql.random().build())],
    __typename: 'Parcel',
  },
};
