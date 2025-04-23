import { CentPrecisionMoney, Money } from '@commercetools-test-data/commons';
import {
  taxedPriceRest,
  taxedPriceGraphql,
  type TTaxedPriceRest,
  type TTaxedPriceGraphql,
} from './index';

const validateCommonFields = (model: TTaxedPriceRest | TTaxedPriceGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      totalNet: expect.objectContaining({
        currencyCode: expect.any(String),
        centAmount: expect.any(Number),
        fractionDigits: expect.any(Number),
        type: 'centPrecision',
      }),
      totalGross: expect.objectContaining({
        currencyCode: expect.any(String),
        centAmount: expect.any(Number),
        fractionDigits: expect.any(Number),
        type: 'centPrecision',
      }),
      totalTax: expect.objectContaining({
        currencyCode: expect.any(String),
        centAmount: expect.any(Number),
        fractionDigits: expect.any(Number),
        type: 'centPrecision',
      }),
    })
  );
};

const validateRestFields = (model: TTaxedPriceRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      taxPortions: expect.arrayContaining([
        expect.objectContaining({
          rate: expect.any(Number),
          amount: expect.objectContaining({
            currencyCode: expect.any(String),
            centAmount: expect.any(Number),
          }),
        }),
      ]),
    })
  );
};

const validateGraphqlFields = (model: TTaxedPriceGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      totalNet: expect.objectContaining({
        __typename: 'Money',
      }),
      totalGross: expect.objectContaining({
        __typename: 'Money',
      }),
      totalTax: expect.objectContaining({
        __typename: 'Money',
      }),
      taxPortions: expect.arrayContaining([
        expect.objectContaining({
          rate: expect.any(Number),
          amount: expect.objectContaining({
            currencyCode: expect.any(String),
            centAmount: expect.any(Number),
          }),
          __typename: 'TaxPortion',
        }),
      ]),
      __typename: 'TaxedPrice',
    })
  );
};

describe('taxed-price Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = taxedPriceRest
      .random()
      .totalTax(CentPrecisionMoney.random())
      .build();

    validateRestFields(restModel);
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = taxedPriceGraphql
      .random()
      .totalTax(Money.random())
      .build();

    validateGraphqlFields(graphqlModel);
  });
});
