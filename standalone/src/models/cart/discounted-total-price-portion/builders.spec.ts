import {
  DiscountedTotalPricePortionRest,
  DiscountedTotalPricePortionGraphql,
} from './index';

describe('DiscountedTotalPricePortion Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountedTotalPricePortionRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        discount: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart-discount',
        }),
        discountedAmount: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountedTotalPricePortionGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        discount: expect.objectContaining({
          id: expect.any(String),
          __typename: 'CartDiscount',
        }),
        discountedAmount: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
        discountRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart-discount',
          __typename: 'Reference',
        }),
        __typename: 'DiscountedTotalPricePortion',
      })
    );
  });
});
