import { TBuilder } from '@/core';
import {
  AddressDraft,
  ReferenceDraftRest,
  ReferenceDraftGraphql,
} from '@/models/commons';
import type { TShippingDraftRest, TShippingDraftGraphql } from '../types';
import { RestModelBuilder, GraphqlModelBuilder } from './builders';

const populateRestModel = (model: TBuilder<TShippingDraftRest>) =>
  model
    .key('test-shipping-key')
    .shippingMethod(ReferenceDraftRest.random().typeId('shipping-method'))
    .shippingAddress(AddressDraft.random())
    .deliveries([]);
const populateGraphqlModel = (model: TBuilder<TShippingDraftGraphql>) =>
  model
    .key('test-shipping-key')
    .shippingMethod(ReferenceDraftGraphql.random().typeId('shipping-method'))
    .shippingAddress(AddressDraft.random())
    .shippingRateInput(null)
    .externalTaxRate(null)
    .deliveries([])
    .custom(null);

const validateRestModel = (model: TShippingDraftRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      shippingMethod: expect.objectContaining({
        typeId: 'shipping-method',
        id: expect.any(String),
      }),
      shippingAddress: expect.objectContaining({
        country: expect.any(String),
      }),
      shippingRateInput: null,
      externalTaxRate: null,
      deliveries: expect.any(Array),
      custom: null,
    })
  );
};

const validateGraphqlModel = (model: TShippingDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      shippingMethod: expect.objectContaining({
        typeId: 'shipping-method',
        id: expect.any(String),
      }),
      shippingAddress: expect.objectContaining({
        country: expect.any(String),
      }),
      shippingRateInput: null,
      externalTaxRate: null,
      deliveries: expect.any(Array),
      custom: null,
    })
  );
};

describe('ShippingDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(RestModelBuilder()).build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(GraphqlModelBuilder()).build();

    validateGraphqlModel(graphqlModel);
  });
});
