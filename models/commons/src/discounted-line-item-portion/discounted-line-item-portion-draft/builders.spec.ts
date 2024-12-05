import {
  DiscountedLineItemPortionDraftRest,
  DiscountedLineItemPortionDraftGraphql,
} from './index';

describe('DiscountedLineItemPortion Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountedLineItemPortionDraftRest.random().build();

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
    const graphqlModel = DiscountedLineItemPortionDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        discount: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart-discount',
          __typename: 'Reference',
        }),
        discountedAmount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
      })
    );
  });
});
