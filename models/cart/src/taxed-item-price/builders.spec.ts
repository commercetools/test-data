import { TaxedItemPriceRest, TaxedItemPriceGraphql } from './index';

describe('TaxedItemPrice Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = TaxedItemPriceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        totalNet: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
        totalGross: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
        taxPortions: expect.arrayContaining([
          expect.objectContaining({
            rate: expect.any(Number),
            amount: expect.objectContaining({
              currencyCode: expect.any(String),
              centAmount: expect.any(Number),
            }),
          }),
        ]),
        totalTax: null,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = TaxedItemPriceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        totalNet: expect.objectContaining({
          __typename: 'Money',
        }),
        totalGross: expect.objectContaining({
          __typename: 'Money',
        }),
        taxPortions: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'TaxPortion',
          }),
        ]),
        totalTax: null,
        __typename: 'TaxedItemPrice',
      })
    );
  });
});
