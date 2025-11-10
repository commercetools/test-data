import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import type {
  TPaymentMethodInfoRest,
  TPaymentMethodInfoGraphql,
} from './types';

function validateModel(
  model: TPaymentMethodInfoRest | TPaymentMethodInfoGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      paymentInterface: expect.any(String),
      method: expect.any(String),
      token: null,
      interfaceAccount: null,
      custom: null,
    })
  );
}

function validateRestModel(model: TPaymentMethodInfoRest) {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        en: expect.any(String),
      }),
    })
  );
}

function validateGraphqlModel(model: TPaymentMethodInfoGraphql) {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      __typename: 'PaymentMethodInfo',
    })
  );
}

describe('PaymentMethodInfo model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('PaymentMethodInfo model compatibility builders', () => {
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
      CompatModelBuilder().buildGraphql<TPaymentMethodInfoGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
