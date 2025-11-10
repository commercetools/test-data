import type {
  TPaymentMethodInfoDraftRest,
  TPaymentMethodInfoDraftGraphql,
} from '../../types';
import * as emptyPresets from './empty';

function validateModel(
  model: TPaymentMethodInfoDraftRest | TPaymentMethodInfoDraftGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      paymentInterface: undefined,
      method: undefined,
      name: undefined,
      token: undefined,
      interfaceAccount: undefined,
      custom: undefined,
    })
  );
}

describe('PaymentMethodInfoDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = emptyPresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('PaymentMethodInfoDraft model compatibility builders', () => {
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
      .buildGraphql<TPaymentMethodInfoDraftGraphql>();

    validateModel(graphqlModel);
  });
});
