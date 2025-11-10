import type {
  TPaymentMethodInfoDraftRest,
  TPaymentMethodInfoDraftGraphql,
} from '../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

function validateModel(
  model: TPaymentMethodInfoDraftRest | TPaymentMethodInfoDraftGraphql
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

function validateRestModel(model: TPaymentMethodInfoDraftRest) {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        en: expect.any(String),
      }),
    })
  );
}

function validateGraphqlModel(model: TPaymentMethodInfoDraftGraphql) {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
    })
  );
}

describe('PaymentMethodInfoDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('PaymentMethodInfoDraft model compatibility builders', () => {
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
      CompatModelBuilder().buildGraphql<TPaymentMethodInfoDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
