import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import type { TPaymentStatusRest, TPaymentStatusGraphql } from './types';

function validateModel(model: TPaymentStatusRest | TPaymentStatusGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      interfaceCode: expect.any(String),
      interfaceText: expect.any(String),
    })
  );
}

function validateRestModel(model: TPaymentStatusRest) {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      state: expect.objectContaining({
        id: expect.any(String),
        typeId: 'state',
      }),
    })
  );
}

function validateGraphqlModel(model: TPaymentStatusGraphql) {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      state: expect.objectContaining({
        __typename: 'State',
      }),
    })
  );
}

describe('PaymentStatus model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('PaymentStatus model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CompatModelBuilder().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CompatModelBuilder().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CompatModelBuilder().buildGraphql<TPaymentStatusGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
