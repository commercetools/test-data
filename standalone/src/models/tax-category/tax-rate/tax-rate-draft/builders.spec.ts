import { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../types';
import { TaxRateDraft, TaxRateDraftGraphql, TaxRateDraftRest } from './index';

const validateModel = (model: TTaxRateDraftGraphql | TTaxRateDraftRest) => {
  expect(model).toMatchObject({
    amount: null,
    country: expect.any(String),
    includedInPrice: expect.any(Boolean),
    key: null,
    name: expect.any(String),
    state: null,
    subRates: null,
  });
};

describe('TaxRateDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = TaxRateDraftRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = TaxRateDraftGraphql.random().build();

    validateModel(graphqlModel);
  });
});

describe('TaxRateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = TaxRateDraft.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = TaxRateDraft.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      TaxRateDraft.random().buildGraphql<TTaxRateDraftGraphql>();

    validateModel(graphqlModel);
  });
});
