import {
  DiscountedLineItemPortionDraftRest,
  DiscountedLineItemPortionDraftGraphql,
} from './index';

describe('DiscountedLineItemPortionDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountedLineItemPortionDraftRest.random().build();

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
    const graphqlModel = DiscountedLineItemPortionDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        discount: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart-discount',
          __typename: 'Reference',
        }),
        discountedAmount: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    );
  });
});
