import { TBuilder } from '@/core';
import { DeliveryItemRest, DeliveryItemGraphql } from '../../delivery-item';
import {
  ParcelMeasurementsRest,
  ParcelMeasurementsGraphql,
} from '../../parcel-measurements';
import { TrackingDataRest, TrackingDataGraphql } from '../../tracking-data';
import { ParcelRest, ParcelGraphql } from '../index';
import { TParcel, TParcelRest, TParcelGraphql } from '../types';

export const restPreset = (): TBuilder<TParcelRest> =>
  ParcelRest.random()
    .measurements(ParcelMeasurementsRest.random())
    .trackingData(TrackingDataRest.random())
    .items([DeliveryItemRest.random()]);

export const graphqlPreset = (): TBuilder<TParcelGraphql> => {
  return ParcelGraphql.random()
    .measurements(ParcelMeasurementsGraphql.random())
    .trackingData(TrackingDataGraphql.random())
    .items([DeliveryItemGraphql.random()]);
};

export const compatPreset = (): TBuilder<TParcel> => {
  return ParcelRest.random()
    .measurements(ParcelMeasurementsRest.random())
    .trackingData(TrackingDataRest.random())
    .items([DeliveryItemRest.random()]);
};
