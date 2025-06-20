import type { TrackingData } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpTrackingData } from '@/graphql-types';

/**
 * @deprecated use `TTrackingDataRest` instead
 */
export type TTrackingData = TrackingData;
export type TTrackingDataRest = TrackingData;
export type TTrackingDataGraphql = TCtpTrackingData;

export type TCreateTrackingDataBuilder<
  TTrackingDataModel extends TTrackingDataRest | TTrackingDataGraphql,
> = () => TBuilder<TTrackingDataModel>;
