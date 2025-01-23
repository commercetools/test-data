import { ProductTailoringDataRest, ProductTailoringDataGraphql } from './index';

describe('ProductTailoringData Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ProductTailoringDataRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        description: null,
        metaDescription: null,
        metaKeywords: null,
        metaTitle: null,
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        slug: expect.any(String),
        variants: [],
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ProductTailoringDataGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        slug: expect.any(String),
        description: undefined,
        metaTitle: undefined,
        metaDescription: undefined,
        metaKeywords: undefined,
        variants: [],
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        slugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        descriptionAllLocales: null,
        metaTitleAllLocales: null,
        metaDescriptionAllLocales: null,
        metaKeywordsAllLocales: null,
        __typename: 'ProductTailoringData',
      })
    );
  });
});
