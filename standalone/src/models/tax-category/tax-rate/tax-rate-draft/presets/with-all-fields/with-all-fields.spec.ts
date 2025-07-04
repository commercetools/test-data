import { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../../../types';
import * as withAllFieldsPresets from './with-all-fields';

const validateModel = (model: TTaxRateDraftGraphql | TTaxRateDraftRest) => {
  expect(model).toMatchObject({
    amount: expect.any(Number),
    key: expect.any(String),
    name: expect.any(String),
    state: expect.any(String),
    subRates: expect.any(Array),
  });
};

describe('TaxRateDraft withAllFields presets builders', () => {
  it('builds a REST model', () => {
    const restModel = withAllFieldsPresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withAllFieldsPresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('TaxRateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = withAllFieldsPresets.compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = withAllFieldsPresets.compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withAllFieldsPresets
      .compatPreset()
      .buildGraphql<TTaxRateDraftGraphql>();

    validateModel(graphqlModel);
  });
});
