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
  measurements: null,
  trackingData: null,
  items: null,
};

export const restFieldsConfig: TModelFieldsConfig<TParcelRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TParcelGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Parcel',
  },
};
