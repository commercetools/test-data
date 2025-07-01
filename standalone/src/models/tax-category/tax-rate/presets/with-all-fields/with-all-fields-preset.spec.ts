import type { TTaxRateGraphql, TTaxRateRest } from '../../types';
import * as withAllFieldsPreset from './with-all-fields-preset';

const validateModel = (model: TTaxRateGraphql | TTaxRateRest) => {
  expect(model).toMatchObject({
    amount: expect.any(Number),
    country: expect.any(String),
    id: expect.any(String),
    includedInPrice: true,
    key: expect.any(String),
    name: expect.any(String),
    state: expect.any(String),
    subRates: expect.any(Array),
  });
};

describe('TaxRate withAllFields preset builders', () => {
  it('builds a REST model', () => {
    const restModel = withAllFieldsPreset.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withAllFieldsPreset.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('TaxRate withAllFields preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = withAllFieldsPreset.compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = withAllFieldsPreset.compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withAllFieldsPreset
      .compatPreset()
      .buildGraphql<TTaxRateGraphql>();

    validateModel(graphqlModel);
  });
});
