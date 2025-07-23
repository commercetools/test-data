import type { TMoneyDraftGraphql, TMoneyDraftRest } from '../types';
import { MoneyDraft, MoneyDraftRest, MoneyDraftGraphql } from './index';

function validateModel(model: TMoneyDraftRest | TMoneyDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode: expect.any(String),
    })
  );
}

describe('MoneyDraft model builders', () => {
  it('builds a REST money draft model', () => {
    const restMoneyDraftModel = MoneyDraftRest.random().build();

    validateModel(restMoneyDraftModel);
  });

  it('builds a GraphQL money draft model', () => {
    const graphqlMoneyDraftModel = MoneyDraftGraphql.random().build();

    validateModel(graphqlMoneyDraftModel);
  });
});

describe('MoneyDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = MoneyDraft.random().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = MoneyDraft.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = MoneyDraft.random().buildGraphql<TMoneyDraftGraphql>();

    validateModel(graphqlModel);
  });
});
