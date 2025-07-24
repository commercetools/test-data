import { MethodTaxedPriceRest, MethodTaxedPriceGraphql } from './index';

describe('MethodTaxedPrice Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = MethodTaxedPriceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        shippingMethodKey: expect.any(String),
        taxedPrice: null,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = MethodTaxedPriceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        shippingMethodKey: expect.any(String),
        taxedPrice: null,
        __typename: 'MethodTaxedPrice',
      })
    );
  });
});
