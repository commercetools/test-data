import { TransactionState, TransactionType } from '../constants';
import type { TTransactionDraftRest, TTransactionDraftGraphql } from '../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

function validateModel(
  model: TTransactionDraftRest | TTransactionDraftGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      timestamp: expect.any(String),
      type: expect.toBeOneOf(Object.values(TransactionType)),
      amount: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      interactionId: null,
      state: expect.toBeOneOf(Object.values(TransactionState)),
      interfaceId: null,
      custom: null,
    })
  );
}

describe('TransactionDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateModel(graphqlModel);
  });
});

describe('TransactionDraft model compatibility builders', () => {
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
      CompatModelBuilder().buildGraphql<TTransactionDraftGraphql>();

    validateModel(graphqlModel);
  });
});
