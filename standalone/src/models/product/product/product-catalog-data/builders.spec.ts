import type {
  TProductCatalogDataRest,
  TProductCatalogDataGraphql,
} from './types';
import {
  ProductCatalogDataRest,
  ProductCatalogDataGraphql,
  ProductCatalogData,
} from './index';

function validateRestModel(restModel: TProductCatalogDataRest) {
  expect(restModel).toEqual(
    expect.objectContaining({
      current: expect.objectContaining({
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        categories: expect.any(Array),
        categoryOrderHints: expect.any(Object),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
        }),
        metaTitle: expect.objectContaining({
          en: expect.any(String),
        }),
        metaDescription: expect.objectContaining({
          en: expect.any(String),
        }),
        metaKeywords: expect.objectContaining({
          en: expect.any(String),
        }),
        masterVariant: expect.objectContaining({ id: expect.any(Number) }),
        variants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
      }),
      staged: expect.objectContaining({
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        categories: expect.any(Array),
        categoryOrderHints: expect.any(Object),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
        }),
        metaTitle: expect.objectContaining({
          en: expect.any(String),
        }),
        metaDescription: expect.objectContaining({
          en: expect.any(String),
        }),
        metaKeywords: expect.objectContaining({
          en: expect.any(String),
        }),
        masterVariant: expect.objectContaining({ id: expect.any(Number) }),
        variants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
      }),
      published: expect.any(Boolean),
      hasStagedChanges: expect.any(Boolean),
    })
  );
}

function validateGraphqlModel(graphqlModel: TProductCatalogDataGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      current: expect.objectContaining({
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        slugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        categoryOrderHint: expect.any(String),
        categoryOrderHints: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CategoryOrderHint',
            categoryId: expect.any(String),
            orderHint: expect.any(String),
          }),
        ]),
        categoriesRef: expect.any(Array),
        categories: expect.any(Array),
        searchKeyword: expect.arrayContaining([]),
        searchKeywords: expect.arrayContaining([]),
        metaTitleAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        metaKeywordsAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        metaDescriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        masterVariant: expect.objectContaining({ id: expect.any(Number) }),
        variant: expect.objectContaining({ id: expect.any(Number) }),
        variants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
        allVariants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
        skus: expect.arrayContaining([expect.any(String)]),
        __typename: 'ProductData',
      }),
      staged: expect.objectContaining({
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        slugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        categoryOrderHint: expect.any(String),
        categoryOrderHints: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CategoryOrderHint',
            categoryId: expect.any(String),
            orderHint: expect.any(String),
          }),
        ]),
        categoriesRef: expect.any(Array),
        categories: expect.any(Array),
        searchKeyword: expect.arrayContaining([]),
        searchKeywords: expect.arrayContaining([]),
        metaTitleAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        metaKeywordsAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        metaDescriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        masterVariant: expect.objectContaining({ id: expect.any(Number) }),
        variant: expect.objectContaining({ id: expect.any(Number) }),
        variants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
        allVariants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
        skus: expect.arrayContaining([expect.any(String)]),
        __typename: 'ProductData',
      }),
      published: expect.any(Boolean),
      hasStagedChanges: expect.any(Boolean),
      __typename: 'ProductCatalogData',
    })
  );
}

describe('Product model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductCatalogDataRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductCatalogDataGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Product model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ProductCatalogData.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductCatalogData.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ProductCatalogData.random().buildGraphql<TProductCatalogDataGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
