import { type TTaxedPriceRest, type TTaxedPriceGraphql } from '../../index';
import * as withCurrencyPresets from './with-currency';

const validateCommonFields = (
  model: TTaxedPriceRest | TTaxedPriceGraphql,
  currencyCode: string
) => {
  expect(model).toEqual(
    expect.objectContaining({
      totalNet: expect.objectContaining({
        currencyCode,
        type: 'centPrecision',
      }),
      totalGross: expect.objectContaining({
        currencyCode,
        type: 'centPrecision',
      }),
    })
  );
};

const validateRestFields = (model: TTaxedPriceRest, currencyCode: string) => {
  validateCommonFields(model, currencyCode);
  expect(model).toEqual(
    expect.objectContaining({
      taxPortions: expect.arrayContaining([
        expect.objectContaining({
          rate: expect.any(Number),
          amount: expect.objectContaining({
            currencyCode,
          }),
        }),
      ]),
    })
  );
};

const validateGraphqlFields = (
  model: TTaxedPriceGraphql,
  currencyCode: string
) => {
  validateCommonFields(model, currencyCode);
  expect(model).toEqual(
    expect.objectContaining({
      totalNet: expect.objectContaining({
        currencyCode,
        __typename: 'Money',
      }),
      totalGross: expect.objectContaining({
        currencyCode,
        __typename: 'Money',
      }),
      taxPortions: expect.arrayContaining([
        expect.objectContaining({
          amount: expect.objectContaining({
            currencyCode,
          }),
          __typename: 'TaxPortion',
        }),
      ]),
      __typename: 'TaxedPrice',
    })
  );
};

describe('TaxedPrice withCurrency presets builders', () => {
  it('should build properties for the REST representation', () => {
    const restModel = withCurrencyPresets.restPreset().build();

    // default currency is EUR
    validateRestFields(restModel, 'EUR');
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = withCurrencyPresets.graphqlPreset('USD').build();

    validateGraphqlFields(graphqlModel, 'USD');
  });
});
