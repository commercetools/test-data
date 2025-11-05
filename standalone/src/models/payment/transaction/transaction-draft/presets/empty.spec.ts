import { TransactionType } from '../../constants';
import type {
  TTransactionDraftRest,
  TTransactionDraftGraphql,
} from '../../types';
import * as emptyPresets from './empty';

function validateModel(
  model: TTransactionDraftRest | TTransactionDraftGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      timestamp: undefined,
      type: expect.toBeOneOf(Object.values(TransactionType)),
      amount: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      interactionId: undefined,
      state: undefined,
      interfaceId: null,
      custom: undefined,
    })
  );
}

describe('TransactionDraft "empty" preset builders', () => {
  it('builds a REST model', () => {
    const restModel = emptyPresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('TransactionDraft "empty" preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = emptyPresets.compatPreset().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = emptyPresets.compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets
      .compatPreset()
      .buildGraphql<TTransactionDraftGraphql>();

    validateModel(graphqlModel);
  });
});
