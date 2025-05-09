import { SelectionOfProductGraphql } from './index';

describe('SelectionOfProduct Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = SelectionOfProductGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        productSelection: expect.objectContaining({
          __typename: 'ProductSelection',
        }),
        productSelectionRef: expect.objectContaining({
          typeId: 'product-selection',
          id: expect.any(String),
        }),
        variantSelection: expect.objectContaining({
          type: expect.stringMatching(/inclusion|exclusion/),
          skus: [],
        }),
        variantExclusion: null,
      })
    );
  });
});
