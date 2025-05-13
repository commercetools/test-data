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
        discountedNetAmount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        discountedGrossAmount: expect.objectContaining({
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
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        discountedNetAmount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        discountedGrossAmount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        includedDiscounts: expect.arrayContaining([
          expect.objectContaining({
            discount: expect.any(Object),
            discountedAmount: expect.any(Object),
            discountRef: expect.any(Object),
            __typename: 'DiscountedTotalPricePortion',
          }),
        ]),
        __typename: 'DiscountOnTotalPrice',
      })
    );
  });
});
