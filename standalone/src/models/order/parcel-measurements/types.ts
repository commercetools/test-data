import type { ParcelMeasurements } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TParcelMeasurements = ParcelMeasurements;

export type TParcelMeasurementsGraphql = TParcelMeasurements & {
  __typename: 'ParcelMeasurements';
};

export type TParcelMeasurementsBuilder = TBuilder<ParcelMeasurements>;
export type TCreateParcelMeasurementsBuilder = () => TParcelMeasurementsBuilder;
