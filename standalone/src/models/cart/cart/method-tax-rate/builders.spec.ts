import { MethodTaxRateRest, MethodTaxRateGraphql } from './index';

describe('MethodTaxRate Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = MethodTaxRateRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        shippingMethodKey: expect.any(String),
        taxRate: null,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = MethodTaxRateGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        shippingMethodKey: expect.any(String),
        taxRate: null,
        __typename: 'MethodTaxRate',
      })
    );
  });
});
