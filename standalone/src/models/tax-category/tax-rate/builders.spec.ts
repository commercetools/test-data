import { TTaxRateGraphql, TTaxRateRest } from './types';
import { TaxRate, TaxRateGraphql, TaxRateRest } from './index';

const validateModel = (model: TTaxRateGraphql | TTaxRateRest) => {
  expect(model).toMatchObject({
    amount: expect.any(Number),
    country: expect.any(String),
    id: null,
    includedInPrice: true,
    key: null,
    name: expect.any(String),
    state: null,
  });
};

describe('TaxRate model builders', () => {
  it('builds a REST model', () => {
    const restModel = TaxRateRest.random().build();

    validateModel(restModel);
    expect(restModel.subRates).toEqual(null);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = TaxRateGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.subRates).toEqual([]);
  });
});

describe('TaxRate model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = TaxRate.random().build();

    validateModel(restModel);
    expect(restModel.subRates).toEqual(null);
  });

  it('builds a REST model', () => {
    const restModel = TaxRate.random().buildRest();

    validateModel(restModel);
    expect(restModel.subRates).toEqual(null);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = TaxRate.random().buildGraphql<TTaxRateGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.subRates).toEqual([]);
  });
});
