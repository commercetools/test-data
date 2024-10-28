import { DiscountedPriceDraftRest, DiscountedPriceDraftGraphql } from './index';

describe('DiscountedPriceDraft Builder', () => {
  it('should build properties for the discounted price draft REST representation', () => {
    const restDraftModel = DiscountedPriceDraftRest.random().build();

    expect(restDraftModel).toEqual(
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

  it('should build properties for the discounted price draft GraphQL representation', () => {
    const graphqlDraftModel = DiscountedPriceDraftGraphql.random().build();

    expect(graphqlDraftModel).toEqual(
      expect.objectContaining({
        __typename: 'DiscountedProductPriceValue',
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
});
