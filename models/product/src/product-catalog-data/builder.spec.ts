/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductCatalogDataRest, TProductCatalogDataGraphql } from './types';
import { ProductCatalogDataRest, ProductCatalogDataGraphql } from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductCatalogDataRest, TProductCatalogDataRest>(
      'rest',
      ProductCatalogDataRest.random(),
      expect.objectContaining({
        current: expect.objectContaining({
          name: expect.objectContaining({
            en: expect.any(String),
          }),
          categories: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              typeId: 'category',
            }),
          ]),
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
          categories: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              typeId: 'category',
            }),
          ]),
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
    )
  );

  it(
    ...createBuilderSpec<
      TProductCatalogDataGraphql,
      TProductCatalogDataGraphql
    >(
      'graphql',
      ProductCatalogDataGraphql.random(),
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
          categoriesRef: expect.arrayContaining([
            {
              typeId: 'category',
              id: expect.any(String),
              __typename: 'Reference',
            },
          ]),
          categories: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              key: expect.any(String),
              __typename: 'Category',
            }),
          ]),
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
          categoriesRef: expect.arrayContaining([
            {
              typeId: 'category',
              id: expect.any(String),
              __typename: 'Reference',
            },
          ]),
          categories: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              key: expect.any(String),
              __typename: 'Category',
            }),
          ]),
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
    )
  );
});
