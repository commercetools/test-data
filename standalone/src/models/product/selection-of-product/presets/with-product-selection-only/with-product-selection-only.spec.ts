import * as withProductSelectionOnly from './with-product-selection-only';

describe('example preset', () => {
  it(`should create the expected object preset - graphql`, () => {
    const graphqlModel = withProductSelectionOnly.graphqlPreset().build();

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
        variantSelection: null,
        variantExclusion: null,
      })
    );
  });
});
