import type { TPaymentDraftRest, TPaymentDraftGraphql } from '../../../types';
import * as withUsdCurrencyCodePresets from './with-usd-currency-code';

function validateModel(model: TPaymentDraftRest | TPaymentDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      anonymousId: undefined,
      amountPlanned: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: 'USD',
      }),
      paymentStatus: expect.objectContaining({
        interfaceCode: expect.any(String),
        interfaceText: expect.any(String),
        state: undefined,
      }),
      transactions: expect.arrayContaining([
        expect.objectContaining({
          amount: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: 'USD',
          }),
        }),
      ]),
    })
  );
}

describe('PaymentDraft "withUsdCurrencyCode" preset builders', () => {
  it('builds a REST model', () => {
    const restModel = withUsdCurrencyCodePresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withUsdCurrencyCodePresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('PaymentDraft "withUsdCurrencyCode" preset compatibility builders', () => {
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
      .buildGraphql<TPaymentDraftGraphql>();

    validateModel(graphqlModel);
  });
});
