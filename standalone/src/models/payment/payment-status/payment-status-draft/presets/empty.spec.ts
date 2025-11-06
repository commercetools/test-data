import type {
  TPaymentStatusDraftRest,
  TPaymentStatusDraftGraphql,
} from '../../types';
import * as emptyPresets from './empty';

function validateModel(
  model: TPaymentStatusDraftRest | TPaymentStatusDraftGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      interfaceCode: undefined,
      interfaceText: undefined,
      state: undefined,
    })
  );
}

describe('PaymentStatusDraft "empty" preset builders', () => {
  it('builds a REST model', () => {
    const restModel = emptyPresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('PaymentStatusDraft "empty" preset compatibility builders', () => {
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
      .buildGraphql<TPaymentStatusDraftGraphql>();

    validateModel(graphqlModel);
  });
});
