import { TBuilder } from '@/core';
import {
  DeliveryItem,
  DeliveryItemRest,
  DeliveryItemGraphql,
} from '../../delivery-item';
import {
  ParcelMeasurements,
  ParcelMeasurementsRest,
  ParcelMeasurementsGraphql,
} from '../../parcel-measurements';
import {
  TrackingData,
  TrackingDataRest,
  TrackingDataGraphql,
} from '../../tracking-data';
import { Parcel, ParcelRest, ParcelGraphql } from '../index';
import { TParcelRest, TParcelGraphql } from '../types';

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

export const compatPreset = (): TBuilder<TParcelRest | TParcelGraphql> => {
  return Parcel.random()
    .measurements(ParcelMeasurements.random())
    .trackingData(TrackingData.random())
    .items([DeliveryItem.random()]);
};
