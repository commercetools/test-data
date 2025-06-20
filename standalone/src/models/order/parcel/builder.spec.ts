/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { DeliveryItem } from '../delivery-item';
import { ParcelMeasurements } from '../parcel-measurements';
import { TrackingData } from '../tracking-data';
import { TParcel, TParcelGraphql } from './types';
import { Parcel } from '.';

describe('builder', () => {
  const defaultParcelSpec = {
    id: expect.any(String),
    key: null,
    measurements: expect.objectContaining({
      heightInMillimeter: expect.any(Number),
      lengthInMillimeter: expect.any(Number),
      widthInMillimeter: expect.any(Number),
      weightInGram: expect.any(Number),
    }),
    trackingData: expect.objectContaining({
      trackingId: expect.any(String),
      carrier: expect.any(String),
      provider: expect.any(String),
      providerTransaction: expect.any(String),
      isReturn: expect.any(Boolean),
    }),
    items: expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        quantity: expect.any(Number),
      }),
    ]),
    custom: null,
    createdAt: expect.any(String),
  };

  it(
    ...createBuilderSpec<TParcel, TParcel>(
      'default',
      Parcel.random(),
      expect.objectContaining(defaultParcelSpec)
    )
  );
  it(
    ...createBuilderSpec<TParcel, TParcelGraphql>(
      'graphql',
      Parcel.random(),
      expect.objectContaining({
        ...defaultParcelSpec,
        __typename: 'Parcel',
      })
    )
  );

  it('should allow customization', () => {
    const id = 'test-id';
    const key = 'test key';
    const heightInMillimeter = 123;
    const carrier = 'Test CARRIER';
    const quantity = 9001;

    const measurements =
      ParcelMeasurements.random().heightInMillimeter(heightInMillimeter);
    const trackingData = TrackingData.random().carrier(carrier);
    const deliveryItem = DeliveryItem.random().quantity(quantity);

    const parcelMock = Parcel.random()
      .id(id)
      .key(key)
      .measurements(measurements)
      // Parcel will be migrated and this file won't exist anymore
      // @ts-expect-error - TrackingData is not a valid type for Parcel
      .trackingData(trackingData)
      .items([deliveryItem])
      // .custom(custom)
      .build();

    expect(parcelMock).toEqual(
      expect.objectContaining({
        id,
        key,
        measurements: expect.objectContaining({
          heightInMillimeter,
        }),
        trackingData: expect.objectContaining({
          carrier,
        }),
        items: expect.arrayContaining([
          expect.objectContaining({
            quantity,
          }),
        ]),
        // custom: null,
      })
    );
  });
});
