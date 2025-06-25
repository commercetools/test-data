import type { ParcelMeasurements } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpParcelMeasurements } from '@/graphql-types';

/**
 * @deprecated use `TParcelMeasurementsRest` instead
 */
export type TParcelMeasurements = ParcelMeasurements;
export type TParcelMeasurementsRest = ParcelMeasurements;
export type TParcelMeasurementsGraphql = TCtpParcelMeasurements;

export type TCreateParcelMeasurementsBuilder<
  TParcelMeasurementsModel extends
    | TParcelMeasurementsRest
    | TParcelMeasurementsGraphql,
> = () => TBuilder<TParcelMeasurementsModel>;
