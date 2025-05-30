import {
  DiscountedPriceDraftRest,
  DiscountedPriceDraftGraphql,
} from '@/models/product/product-discount';

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
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          __typename: 'Money',
        }),
        discount: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-discount',
          __typename: 'Reference',
        }),
      })
    );
  });
});
