import { TBuilder } from '@/core';
import {
  ItemShippingTargetRest,
  ItemShippingTargetGraphql,
} from '../../item-shipping-target';
import type {
  TItemShippingDetailsDraftRest,
  TItemShippingDetailsDraftGraphql,
} from '../types';
import { RestModelBuilder, GraphqlModelBuilder } from './builders';

const populateRestModel = (model: TBuilder<TItemShippingDetailsDraftRest>) =>
  model.targets([ItemShippingTargetRest.random()]);

const populateGraphqlModel = (
  model: TBuilder<TItemShippingDetailsDraftGraphql>
) => model.targets([ItemShippingTargetGraphql.random()]);

const validateRestModel = (model: TItemShippingDetailsDraftRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      targets: expect.arrayContaining([ItemShippingTargetRest.random()]),
    })
  );
};

const validateGraphqlModel = (model: TItemShippingDetailsDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      targets: expect.arrayContaining([ItemShippingTargetGraphql.random()]),
      itemShippingAddressTargets: null,
      shippingTargets: null,
    })
  );
};

describe('ItemShippingDetailsDraft model builders', () => {
  it('should create a valid rest model', () => {
    const restModel = populateRestModel(RestModelBuilder()).build();
    validateRestModel(restModel);
  });

  it('should create a valid graphql model', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();
    validateGraphqlModel(graphqlModel);
  });
});
