import { DiscountedPriceRest, DiscountedPriceGraphql } from './index';

describe('DiscountedPrice Builder', () => {
  it('should build properties for the discounted price REST representation', () => {
    const restModel = DiscountedPriceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          id: expect.any(String),
          value: expect.any(Object),
        }),
        discount: expect.objectContaining({
          id: expect.any(String),
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
          id: expect.any(String),
          value: expect.any(Object),
        }),
        discount: expect.objectContaining({
          id: expect.any(String),
        }),
        discountRef: expect.objectContaining({
          id: expect.any(String),
        }),
      })
    );
  });
});
