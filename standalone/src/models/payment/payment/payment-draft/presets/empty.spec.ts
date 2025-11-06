import type { TPaymentDraftRest, TPaymentDraftGraphql } from '../../types';
import * as emptyPresets from './empty';

function validateModel(model: TPaymentDraftRest | TPaymentDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      amountPlanned: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      paymentMethodInfo: undefined,
      custom: undefined,
      key: undefined,
      customer: undefined,
      anonymousId: undefined,
      interfaceId: undefined,
      paymentStatus: undefined,
      transactions: undefined,
      interfaceInteractions: undefined,
    })
  );
}

describe('PaymentDraft "empty" preset builders', () => {
  it('builds a REST model', () => {
    const restModel = emptyPresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('PaymentDraft "empty" preset compatibility builders', () => {
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
      .buildGraphql<TPaymentDraftGraphql>();

    validateModel(graphqlModel);
  });
});
