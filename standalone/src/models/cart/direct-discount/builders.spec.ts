import { CartDiscountLineItemsTarget } from '@/models/cart-discount';
import { DirectDiscountRest, DirectDiscountGraphql } from './index';

describe('DirectDiscount Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DirectDiscountRest.random()
      .target(CartDiscountLineItemsTarget.random())
      .build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        value: expect.objectContaining({
          type: 'relative',
          permyriad: expect.any(Number),
        }),
        target: expect.objectContaining({
          type: 'lineItems',
          predicate: expect.any(String),
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DirectDiscountGraphql.random()
      .target(CartDiscountLineItemsTarget.random())
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        value: expect.objectContaining({
          type: 'relative',
          permyriad: expect.any(Number),
        }),
        target: expect.objectContaining({
          type: 'lineItems',
          predicate: expect.any(String),
          __typename: 'LineItemsTarget',
        }),
        __typename: 'DirectDiscount',
      })
    );
  });
});
