import type { TPaymentDraftRest, TPaymentDraftGraphql } from '../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

function validateModel(model: TPaymentDraftRest | TPaymentDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      amountPlanned: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      paymentMethodInfo: expect.objectContaining({
        paymentInterface: expect.any(String),
        method: expect.any(String),
      }),
      custom: null,
      key: expect.any(String),
      customer: expect.objectContaining({
        id: expect.any(String),
        typeId: 'customer',
      }),
      anonymousId: expect.any(String),
      interfaceId: expect.any(String),
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
      interfaceInteractions: [],
    })
  );
}

describe('Payment model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateModel(graphqlModel);
  });
});

describe('Payment model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CompatModelBuilder().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CompatModelBuilder().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CompatModelBuilder().buildGraphql<TPaymentDraftGraphql>();

    validateModel(graphqlModel);
  });
});
