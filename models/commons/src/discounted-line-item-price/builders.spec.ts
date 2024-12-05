import {
  DiscountedLineItemPriceRest,
  DiscountedLineItemPriceGraphql,
} from './index';

describe('DiscountedLineItemPrice Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountedLineItemPriceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        includedDiscounts: expect.arrayContaining([
          expect.objectContaining({
            discount: expect.objectContaining({
              typeId: 'cart-discount',
            }),
          }),
        ]),
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountedLineItemPriceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        includedDiscounts: expect.arrayContaining([
          expect.objectContaining({
            discountedAmount: expect.objectContaining({
              centAmount: expect.any(Number),
              currencyCode: expect.any(String),
              __typename: 'Money',
            }),
            discount: expect.objectContaining({
              __typename: 'CartDiscount',
            }),
            discountRef: expect.objectContaining({
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
