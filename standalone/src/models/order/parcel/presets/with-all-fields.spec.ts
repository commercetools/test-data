import type { TParcel, TParcelRest, TParcelGraphql } from '../types';
import { restPreset, graphqlPreset, compatPreset } from './with-all-fields';

const validateRestFields = (model: TParcelRest | TParcel) => {
  expect(model).toMatchObject(
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
    })
  );
};

const validateGraphqlFields = (model: TParcelGraphql) => {
  expect(model).toMatchObject(
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
        provider: expect.any(String),
        providerTransaction: expect.any(String),
        isReturn: expect.any(Boolean),
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

describe('Parcel with all fields presets', () => {
  describe('Parcel model builders', () => {
    it('builds a REST model', () => {
      const restModelFromPreset = restPreset().build();
      validateRestFields(restModelFromPreset);
    });

    it('builds a GraphQL model', () => {
      const graphqlModelFromPreset = graphqlPreset().build();
      validateGraphqlFields(graphqlModelFromPreset);
    });
  });

  describe('Parcel compatibility builder', () => {
    it('builds a DEFAULT model', () => {
      const compatDefaultModelFromPreset = compatPreset().build();
      validateRestFields(compatDefaultModelFromPreset);
    });

    it('builds a REST model', () => {
      const compatRestModelFromPreset = compatPreset().buildRest();
      validateRestFields(compatRestModelFromPreset);
    });

    it('builds a GraphQL model', () => {
      const compatGraphqlPresetFromPreset =
        compatPreset().buildGraphql<TParcelGraphql>();
      validateGraphqlFields(compatGraphqlPresetFromPreset);
    });
  });
});
