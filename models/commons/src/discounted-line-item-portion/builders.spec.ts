import {
  DiscountedLineItemPortionRest,
  DiscountedLineItemPortionGraphql,
} from './index';

describe('DiscountedLineItemPortion Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountedLineItemPortionRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        discount: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart-discount',
        }),
        discountedAmount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountedLineItemPortionGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        discount: expect.objectContaining({
          __typename: 'CartDiscount',
        }),
        discountRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart-discount',
          __typename: 'Reference',
        }),
        discountedAmount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        __typename: 'DiscountedLineItemPortion',
      })
    );
  });
});
