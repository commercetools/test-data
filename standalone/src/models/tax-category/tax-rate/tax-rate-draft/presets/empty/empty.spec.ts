import { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../../../types';
import * as emptyPresets from './empty';

const validateModel = (model: TTaxRateDraftGraphql | TTaxRateDraftRest) => {
  expect(model).toMatchObject({
    amount: undefined,
    state: undefined,
    subRates: undefined,
  });
};

describe('TaxRateDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = emptyPresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('TaxRateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = emptyPresets.compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = emptyPresets.compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets
      .compatPreset()
      .buildGraphql<TTaxRateDraftGraphql>();

    validateModel(graphqlModel);
  });
});
