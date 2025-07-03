import { targetTypes } from './constants';
import { CartDiscountTargetRest, CartDiscountTargetGraphql } from './index';

describe('CartDiscountTarget Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CartDiscountTargetRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CartDiscountTargetGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        type: expect.any(String),
        __typename: expect.any(String),
      })
    );
  });

  it('should set the right __typename for the GraphQL representation', () => {
    let graphqlModel = CartDiscountTargetGraphql.random()
      .type(targetTypes.customLineItems)
      .build();
    expect(graphqlModel.__typename).toBe('CustomLineItemsTarget');

    graphqlModel = CartDiscountTargetGraphql.random()
      .type(targetTypes.lineItems)
      .build();
    expect(graphqlModel.__typename).toBe('LineItemsTarget');

    graphqlModel = CartDiscountTargetGraphql.random()
      .type(targetTypes.pattern)
      .build();
    expect(graphqlModel.__typename).toBe('PatternTarget');

    graphqlModel = CartDiscountTargetGraphql.random()
      .type(targetTypes.shipping)
      .build();
    expect(graphqlModel.__typename).toBe('ShippingTarget');

    graphqlModel = CartDiscountTargetGraphql.random()
      .type(targetTypes.totalPrice)
      .build();
    expect(graphqlModel.__typename).toBe('TotalPriceTarget');
  });

  it('should include predicate for shipping target', () => {
    const graphqlModel = CartDiscountTargetGraphql.random()
      .type(targetTypes.shipping)
      .build();

    expect(graphqlModel.predicate).toBeDefined();
  });

  it('should not include predicate for non-shipping target', () => {
    const graphqlModel = CartDiscountTargetGraphql.random()
      .type(targetTypes.customLineItems)
      .build();
    expect(graphqlModel.predicate).toBeUndefined();
  });
});
