import { TBuilder } from '@/core';
import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import type {
  TItemShippingTargetRest,
  TItemShippingTargetGraphql,
} from './types';

const populateRestModel = (model: TBuilder<TItemShippingTargetRest>) =>
  model.addressKey('test-address-key').quantity(1);

const populateGraphqlModel = (model: TBuilder<TItemShippingTargetGraphql>) =>
  model.addressKey('test-address-key').quantity(1).shippingMethodKey(null);

const validateRestModel = (model: TItemShippingTargetRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      addressKey: expect.any(String),
      quantity: expect.any(Number),
      shippingMethodKey: null,
    })
  );
};

const validateGraphqlModel = (model: TItemShippingTargetGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      addressKey: expect.any(String),
      quantity: expect.any(Number),
      shippingMethodKey: null,
      __typename: 'ItemShippingTarget',
    })
  );
};

describe('ItemShippingTarget model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(RestModelBuilder()).build();
    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();
    validateGraphqlModel(graphqlModel);
  });
});
