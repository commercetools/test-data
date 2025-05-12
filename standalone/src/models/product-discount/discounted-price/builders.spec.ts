import { DiscountedPriceRest, DiscountedPriceGraphql } from '..';

describe('DiscountedPrice Builder', () => {
  it('should build properties for the discounted price REST representation', () => {
    const restModel = DiscountedPriceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        discount: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-discount',
        }),
      })
    );
  });

  it('should build properties for the discounted price GraphQL representation', () => {
    const graphqlModel = DiscountedPriceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'DiscountedProductPriceValue',
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          __typename: 'Money',
        }),
        discount: expect.objectContaining({
          id: expect.any(String),
          __typename: 'ProductDiscount',
        }),
        discountRef: expect.objectContaining({
          id: graphqlModel.discount?.id,
          typeId: 'product-discount',
          __typename: 'Reference',
        }),
      })
    );
  });
});
