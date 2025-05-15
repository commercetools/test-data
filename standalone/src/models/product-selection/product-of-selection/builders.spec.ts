import { ProductOfSelectionGraphql } from './index';

describe('ProductOfSelection Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ProductOfSelectionGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        productRef: expect.objectContaining({
          __typename: 'Reference',
          typeId: 'product',
          id: expect.any(String),
        }),
        product: expect.any(Object),
        variantExclusion: expect.any(Object),
        variantSelection: expect.any(Object),
        __typename: 'ProductOfSelection',
      })
    );
  });
});
