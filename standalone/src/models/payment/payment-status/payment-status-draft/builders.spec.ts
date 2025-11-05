import type {
  TPaymentStatusDraftRest,
  TPaymentStatusDraftGraphql,
} from '../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

function validateModel(
  model: TPaymentStatusDraftRest | TPaymentStatusDraftGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      interfaceCode: expect.any(String),
      interfaceText: expect.any(String),
      state: expect.objectContaining({
        id: expect.any(String),
        typeId: 'state',
      }),
    })
  );
}

describe('PaymentStatusDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateModel(graphqlModel);
  });
});

describe('PaymentStatusDraft model compatibility builders', () => {
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
      CompatModelBuilder().buildGraphql<TPaymentStatusDraftGraphql>();

    validateModel(graphqlModel);
  });
});
