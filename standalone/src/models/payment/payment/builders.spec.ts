import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import type { TPaymentRest, TPaymentGraphql } from './types';

function validateModel(model: TPaymentRest | TPaymentGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      anonymousId: expect.any(String),
      createdAt: expect.any(String),
      createdBy: null,
      custom: null,
      id: expect.any(String),
      interfaceInteractions: [],
      interfaceId: expect.any(String),
      key: expect.any(String),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: null,
      version: expect.any(Number),
    })
  );
}

function validateRestModel(model: TPaymentRest) {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      amountPlanned: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      customer: expect.objectContaining({
        id: expect.any(String),
        typeId: 'customer',
      }),
      paymentMethodInfo: expect.objectContaining({
        paymentInterface: expect.any(String),
        method: expect.any(String),
      }),
      paymentStatus: expect.objectContaining({
        interfaceCode: expect.any(String),
        interfaceText: expect.any(String),
      }),
      transactions: expect.arrayContaining([
        expect.objectContaining({
          amount: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
        }),
      ]),
    })
  );
}

function validateGraphqlModel(model: TPaymentGraphql) {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      amountPlanned: expect.objectContaining({
        __typename: 'Money',
      }),
      customer: expect.objectContaining({
        __typename: 'Customer',
      }),
      customerRef: expect.objectContaining({
        __typename: 'Reference',
        typeId: 'customer',
      }),
      paymentMethodInfo: expect.objectContaining({
        __typename: 'PaymentMethodInfo',
      }),
      paymentStatus: expect.objectContaining({
        __typename: 'PaymentStatus',
      }),
      transactions: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'Transaction',
        }),
      ]),
      __typename: 'Payment',
    })
  );
}

describe('Payment model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Payment model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CompatModelBuilder().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CompatModelBuilder().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CompatModelBuilder().buildGraphql<TPaymentGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
