import { TBuilder } from '@/core';
import {
  ItemShippingTargetRest,
  ItemShippingTargetGraphql,
} from '../item-shipping-target';
import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import type {
  TItemShippingDetailsRest,
  TItemShippingDetailsGraphql,
} from './types';

const populateRestModel = (model: TBuilder<TItemShippingDetailsRest>) =>
  model.valid(true).targets([ItemShippingTargetRest.random()]);

const populateGraphqlModel = (model: TBuilder<TItemShippingDetailsGraphql>) =>
  model.valid(true).targets([ItemShippingTargetGraphql.random()]);

const validateRestModel = (model: TItemShippingDetailsRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      valid: expect.any(Boolean),
      targets: expect.arrayContaining([
        expect.objectContaining({
          addressKey: expect.any(String),
          quantity: expect.any(Number),
          shippingMethodKey: null,
        }),
      ]),
    })
  );
};

const validateGraphqlModel = (model: TItemShippingDetailsGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      valid: expect.any(Boolean),
      __typename: 'ItemShippingDetails',
      targets: expect.arrayContaining([
        expect.objectContaining({
          addressKey: expect.any(String),
          quantity: expect.any(Number),
          shippingMethodKey: null,
          __typename: 'ItemShippingTarget',
        }),
      ]),
    })
  );
};

describe('ItemShippingDetails model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(RestModelBuilder()).build();
    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();
    validateGraphqlModel(graphqlModel);
  });
});
