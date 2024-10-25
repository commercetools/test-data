import { DiscountedPriceDraftRest, DiscountedPriceDraftGraphql } from './index';

describe('DiscountedPriceDraft Builder', () => {
  it('should build properties for the discounted price draft REST representation', () => {
    const restDraftModel = DiscountedPriceDraftRest.random().build();

    expect(restDraftModel).toEqual(
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

  it('should build properties for the discounted price draft GraphQL representation', () => {
    const graphqlDraftModel = DiscountedPriceDraftGraphql.random().build();

    expect(graphqlDraftModel).toEqual(
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
});
