import {
  DiscountedLineItemPriceRest,
  DiscountedLineItemPriceGraphql,
} from './index';

describe('DiscountedLineItemPrice Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountedLineItemPriceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
        includedDiscounts: expect.arrayContaining([
          expect.objectContaining({
            discount: expect.objectContaining({
              id: expect.any(String),
              typeId: 'cart-discount',
            }),
            discountedAmount: expect.objectContaining({
              currencyCode: expect.any(String),
              centAmount: expect.any(Number),
            }),
          }),
        ]),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountedLineItemPriceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
        includedDiscounts: expect.arrayContaining([
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
            __typename: 'DiscountedLineItemPortion',
          }),
        ]),
        __typename: 'DiscountedLineItemPrice',
      })
    );
  });
});
