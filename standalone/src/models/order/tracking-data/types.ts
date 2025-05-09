import type { TrackingData } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TTrackingData = TrackingData;

export type TTrackingDataGraphql = TTrackingData & {
  __typename: 'TrackingData';
};

export type TTrackingDataBuilder = TBuilder<TrackingData>;
export type TCreateTrackingDataBuilder = () => TTrackingDataBuilder;
