import type { TMoneyGraphql, TMoneyRest } from './types';
import { Money, MoneyRest, MoneyGraphql } from './index';

function validateRestModel(restModel: TMoneyRest) {
  expect(restModel).toEqual(
    expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode: expect.any(String),
    })
  );
}

function validateGraphqlModel(graphqlModel: TMoneyGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode: expect.any(String),
      type: 'centPrecision',
      fractionDigits: 2,
      __typename: 'Money',
    })
  );
}

describe('Money model builders', () => {
  it('builds a REST money model', () => {
    const restMoneyModel = MoneyRest.random().build();

    validateRestModel(restMoneyModel);
  });

  it('builds a GraphQL money model', () => {
    const graphqlMoneyModel = MoneyGraphql.random().build();

    validateGraphqlModel(graphqlMoneyModel);
  });
});

describe('Money model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = Money.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = Money.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = Money.random().buildGraphql<TMoneyGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
