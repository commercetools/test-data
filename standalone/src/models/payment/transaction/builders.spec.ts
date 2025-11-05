import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import { TransactionState, TransactionType } from './constants';
import type { TTransactionRest, TTransactionGraphql } from './types';

function validateModel(model: TTransactionRest | TTransactionGraphql) {
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

describe('Transaction model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toBe('Transaction');
  });
});

describe('Transaction model compatibility builders', () => {
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
      CompatModelBuilder().buildGraphql<TTransactionGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toBe('Transaction');
  });
});
