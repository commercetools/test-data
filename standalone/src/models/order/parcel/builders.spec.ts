import { TBuilder } from '@/core';
import { DeliveryItemRest, DeliveryItemGraphql } from '../delivery-item';
import {
  ParcelMeasurementsRest,
  ParcelMeasurementsGraphql,
} from '../parcel-measurements';
import { TrackingDataRest, TrackingDataGraphql } from '../tracking-data';
import type { TParcelRest, TParcelGraphql } from './types';
import { ParcelRest, ParcelGraphql, Parcel } from './index';

const populateGraphqlFields = (model: TBuilder<TParcelGraphql>) =>
  model
    .measurements(ParcelMeasurementsGraphql.random().build())
    .trackingData(TrackingDataGraphql.random().build())
    .items([DeliveryItemGraphql.random().build()]);

const populateRestFields = (model: TBuilder<TParcelRest>) =>
  model
    .measurements(ParcelMeasurementsRest.random().build())
    .trackingData(TrackingDataRest.random().build())
    .items([DeliveryItemRest.random().build()]);

const validateCommonFields = (model: TParcelRest | TParcelGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      createdAt: expect.any(String),
    })
  );
};

const validateRestFields = (model: TParcelRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      measurements: expect.objectContaining({
        heightInMillimeter: expect.any(Number),
        lengthInMillimeter: expect.any(Number),
        widthInMillimeter: expect.any(Number),
        weightInGram: expect.any(Number),
      }),
      trackingData: expect.objectContaining({
        trackingId: expect.any(String),
        carrier: expect.any(String),
      }),
      items: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          quantity: expect.any(Number),
        }),
      ]),
    })
  );
};

const validateGraphqlFields = (model: TParcelGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Parcel',
      measurements: expect.objectContaining({
        __typename: 'ParcelMeasurements',
        heightInMillimeter: expect.any(Number),
        lengthInMillimeter: expect.any(Number),
        widthInMillimeter: expect.any(Number),
        weightInGram: expect.any(Number),
      }),
      trackingData: expect.objectContaining({
        __typename: 'TrackingData',
        trackingId: expect.any(String),
        carrier: expect.any(String),
      }),
      items: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'DeliveryItem',
          id: expect.any(String),
          quantity: expect.any(Number),
        }),
      ]),
    })
  );
};

describe('Parcel model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestFields(ParcelRest.random()).buildRest();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlFields(
      ParcelGraphql.random()
    ).buildGraphql();
    validateGraphqlFields(graphqlModel);
  });
});

describe('Parcel compatibility builder', () => {
  it('builds a DEFAULT model', () => {
    const defaultModel = populateRestFields(Parcel.random()).build();
    validateRestFields(defaultModel);
  });

  it('builds a REST model', () => {
    const restModel = populateRestFields(Parcel.random()).buildRest();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlFields(Parcel.random()).buildGraphql();
    validateGraphqlFields(graphqlModel);
  });
});
