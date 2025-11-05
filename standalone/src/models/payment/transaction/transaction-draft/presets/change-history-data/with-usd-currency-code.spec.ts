import { TransactionState, TransactionType } from '../../../constants';
import type {
  TTransactionDraftRest,
  TTransactionDraftGraphql,
} from '../../../types';
import * as withUsdCurrencyCodePresets from './with-usd-currency-code';

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
        currencyCode: 'USD',
      }),
      interactionId: null,
      state: expect.toBeOneOf(Object.values(TransactionState)),
      interfaceId: null,
      custom: null,
    })
  );
}

describe('TransactionDraft "withUsdCurrencyCodePresets" preset builders', () => {
  it('builds a REST model', () => {
    const restModel = withUsdCurrencyCodePresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withUsdCurrencyCodePresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('TransactionDraft "withUsdCurrencyCodePresets" preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = withUsdCurrencyCodePresets.compatPreset().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = withUsdCurrencyCodePresets.compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withUsdCurrencyCodePresets
      .compatPreset()
      .buildGraphql<TTransactionDraftGraphql>();

    validateModel(graphqlModel);
  });
});
