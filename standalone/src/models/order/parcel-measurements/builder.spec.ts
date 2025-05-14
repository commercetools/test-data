/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TParcelMeasurements, TParcelMeasurementsGraphql } from './types';
import { ParcelMeasurements } from '.';

describe('builder', () => {
  const defaultParcelMeasurementsSpec = {
    heightInMillimeter: expect.any(Number),
    lengthInMillimeter: expect.any(Number),
    widthInMillimeter: expect.any(Number),
    weightInGram: expect.any(Number),
  };

  it(
    ...createBuilderSpec<TParcelMeasurements, TParcelMeasurements>(
      'default',
      ParcelMeasurements.random(),
      expect.objectContaining(defaultParcelMeasurementsSpec)
    )
  );
  it(
    ...createBuilderSpec<TParcelMeasurements, TParcelMeasurementsGraphql>(
      'graphql',
      ParcelMeasurements.random(),
      expect.objectContaining({
        ...defaultParcelMeasurementsSpec,
        __typename: 'ParcelMeasurements',
      })
    )
  );

  it('should allow customization', () => {
    const heightInMillimeter = 123;
    const lengthInMillimeter = 456;
    const widthInMillimeter = 789;
    const weightInGram = 321;

    const parcelMeasurementsMock = ParcelMeasurements.random()
      .heightInMillimeter(heightInMillimeter)
      .lengthInMillimeter(lengthInMillimeter)
      .widthInMillimeter(widthInMillimeter)
      .weightInGram(weightInGram)
      .build();

    expect(parcelMeasurementsMock).toEqual({
      heightInMillimeter,
      lengthInMillimeter,
      widthInMillimeter,
      weightInGram,
    });
  });
});
