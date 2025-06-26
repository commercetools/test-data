import type { TDelivery, TDeliveryRest, TDeliveryGraphql } from './types';
import { DeliveryRest, DeliveryGraphql, Delivery } from './index';

const validateCommonFields = (model: TDeliveryRest | TDeliveryGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: null,
      address: null,
      custom: null,
      createdAt: expect.any(String),
      items: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          quantity: expect.any(Number),
        }),
      ]),
      parcels: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          createdAt: expect.any(String),
        }),
      ]),
    })
  );
};

const validateRestFields = (model: TDeliveryRest | TDelivery) => {
  validateCommonFields(model);
};

const validateGraphqlFields = (model: TDeliveryGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Delivery',
      items: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'DeliveryItem',
        }),
      ]),
      parcels: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'Parcel',
        }),
      ]),
    })
  );
};

describe('Delivery model builders', () => {
  it('builds a REST model', () => {
    const restModel = DeliveryRest.random().buildRest();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = DeliveryGraphql.random().buildGraphql();
    validateGraphqlFields(graphqlModel);
  });
});

describe('Delivery compatibility builder', () => {
  it('builds a DEFAULT model', () => {
    const defaultModel = Delivery.random().build<TDeliveryRest>();
    validateRestFields(defaultModel);
  });

  it('builds a REST model', () => {
    const restModel = Delivery.random().buildRest<TDeliveryRest>();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = Delivery.random().buildGraphql<TDeliveryGraphql>();
    validateGraphqlFields(graphqlModel);
  });
});
