import {
  ProductTailoringDataDraftRest,
  ProductTailoringDataDraftGraphql,
} from './index';

describe('ProductTailoringDataDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ProductTailoringDataDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        store: expect.objectContaining({
          typeId: 'store',
        }),
        product: expect.objectContaining({
          typeId: 'product',
        }),
        key: null,
        description: null,
        metaDescription: null,
        metaKeywords: null,
        metaTitle: null,
        name: null,
        slug: null,
        publish: expect.any(Boolean),
        variants: [],
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ProductTailoringDataDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        product: expect.objectContaining({
          typeId: 'product',
        }),
        key: null,
        description: null,
        metaDescription: null,
        metaKeywords: null,
        metaTitle: null,
        name: null,
        slug: null,
        publish: expect.any(Boolean),
        variants: [],
      })
    );
  });
});
