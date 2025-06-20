import { TBuilder } from '@/core';
import { Address } from '@/models/commons';
import { ShippingInfoRest, ShippingInfoGraphql } from '../shipping-info';
import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import type { TShippingRest, TShippingGraphql } from './types';

const populateRestModel = (model: TBuilder<TShippingRest>) =>
  model
    .shippingKey('test-shipping-key')
    .shippingAddress(Address.random())
    .shippingInfo(ShippingInfoRest.random());

const populateGraphqlModel = (model: TBuilder<TShippingGraphql>) =>
  model
    .shippingKey('test-shipping-key')
    .shippingAddress(Address.random())
    .shippingInfo(ShippingInfoGraphql.random().buildGraphql())
    .shippingRateInput(null)
    .shippingCustomFields(null);

const validateRestModel = (model: TShippingRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      shippingKey: expect.any(String),
      shippingAddress: expect.objectContaining({
        country: expect.any(String),
      }),
      shippingInfo: expect.objectContaining({
        price: expect.objectContaining({
          type: 'centPrecision',
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        shippingMethodName: expect.any(String),
        shippingRate: expect.objectContaining({
          price: expect.objectContaining({
            type: 'centPrecision',
          }),
        }),
      }),
      shippingRateInput: null,
      shippingCustomFields: null,
    })
  );
};

const validateGraphqlModel = (model: TShippingGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Shipping',
      shippingKey: expect.any(String),
      shippingAddress: expect.objectContaining({
        country: expect.any(String),
        __typename: 'Address',
      }),
      shippingInfo: expect.objectContaining({
        __typename: 'ShippingInfo',
        price: expect.objectContaining({
          __typename: 'Money',
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        shippingMethodName: expect.any(String),
        shippingRate: expect.objectContaining({
          __typename: 'ShippingRate',
        }),
      }),
      shippingRateInput: null,
      shippingCustomFields: null,
    })
  );
};

describe('Shipping model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(RestModelBuilder()).build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();

    validateGraphqlModel(graphqlModel);
  });
});
