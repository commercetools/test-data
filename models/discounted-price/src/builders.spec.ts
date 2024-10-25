import { DiscountedPriceRest, DiscountedPriceGraphql } from './index';

describe('DiscountedPrice Builder', () => {
  it('should build properties for the REST representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const restModel = DiscountedPriceRest.random().build();

    expect(restModel).toEqual(
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
  it('should build properties for the GraphQL representation', () => {
    // TODO: Complete the test by adding all the properties of the model
    // and check for the expected values
    const graphqlModel = DiscountedPriceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'DiscountedProductPriceValue',
        value: expect.objectContaining({
          id: expect.any(String),
          value: expect.any(Object),
        }),
        discount: expect.objectContaining({
          id: expect.any(String),
        }),
        discountRef: expect.objectContaining({
          id: expect.any(String),
        }),
      })
    );
  });
});
