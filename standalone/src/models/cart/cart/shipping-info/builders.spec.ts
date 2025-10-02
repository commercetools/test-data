import { ShippingInfoRest, ShippingInfoGraphql } from './index';

describe('ShippingInfo Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ShippingInfoRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        deliveries: [],
        discountedPrice: null,
        price: expect.objectContaining({
          type: 'centPrecision',
        }),
        shippingMethod: null,
        shippingMethodName: expect.any(String),
        shippingMethodState: expect.stringMatching(
          /DoesNotMatchCart|MatchesCart/
        ),
        shippingRate: expect.objectContaining({
          price: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
        }),
        taxCategory: null,
        taxRate: null,
        taxedPrice: null,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ShippingInfoGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        deliveries: [],
        discountedPrice: null,
        price: expect.objectContaining({
          __typename: 'Money',
        }),
        shippingMethod: null,
        shippingMethodName: expect.any(String),
        shippingMethodState: expect.stringMatching(
          /DoesNotMatchCart|MatchesCart/
        ),
        shippingRate: expect.objectContaining({
          __typename: 'ShippingRate',
        }),
        taxCategory: null,
        taxRate: null,
        taxedPrice: null,
        shippingMethodRef: null,
        taxCategoryRef: null,
        __typename: 'ShippingInfo',
      })
    );
  });
});
