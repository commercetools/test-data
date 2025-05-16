import { DiscountOnTotalPriceRest, DiscountOnTotalPriceGraphql } from './index';

describe('DiscountOnTotalPrice Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountOnTotalPriceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        discountedAmount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        includedDiscounts: expect.arrayContaining([
          expect.objectContaining({
            discount: expect.any(Object),
            discountedAmount: expect.any(Object),
          }),
        ]),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountOnTotalPriceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        discountedAmount: expect.objectContaining({
          __typename: 'Money',
        }),
        includedDiscounts: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'DiscountedTotalPricePortion',
          }),
        ]),
        __typename: 'DiscountOnTotalPrice',
      })
    );
  });
});
