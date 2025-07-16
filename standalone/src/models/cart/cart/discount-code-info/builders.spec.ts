import { states } from './constants';
import { DiscountCodeInfoRest, DiscountCodeInfoGraphql } from './index';

describe('DiscountCodeInfo Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountCodeInfoRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        discountCode: expect.objectContaining({
          id: expect.any(String),
          typeId: 'discount-code',
          obj: expect.any(Object),
        }),
        state: expect.toBeOneOf(Object.values(states)),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountCodeInfoGraphql.random().build();

    console.log(graphqlModel);
    expect(graphqlModel).toEqual(
      expect.objectContaining({
        discountCode: expect.objectContaining({
          __typename: 'DiscountCode',
        }),
        discountCodeRef: expect.objectContaining({
          typeId: 'discount-code',
          __typename: 'Reference',
        }),
        state: expect.toBeOneOf(Object.values(states)),
        __typename: 'DiscountCodeInfo',
        states,
      })
    );
  });
});
