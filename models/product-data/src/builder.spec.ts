/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductData, TProductDataGraphql } from './types';
import * as ProductData from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductData, TProductData>(
      'default',
      ProductData.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        categories: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            key: expect.any(String),
          }),
        ]),
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
        masterVariant: null,
        variant: null,
        variants: expect.arrayContaining([]),
        allVariants: expect.arrayContaining([]),
        searchKeywords: null,
        searchKeyword: expect.arrayContaining([]),
        categoriesRef: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            typeId: 'category',
          }),
        ]),
        categoryOrderHints: expect.any(Object),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductData, TProductData>(
      'rest',
      ProductData.random(),
      expect.objectContaining({
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
      })
    )
  );

  it(
    ...createBuilderSpec<TProductData, TProductDataGraphql>(
      'graphql',
      ProductData.random(),
      expect.objectContaining({
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
        masterVariant: null,
        variants: expect.arrayContaining([]),
        allVariants: expect.arrayContaining([]),
        variant: null,
        skus: expect.arrayContaining([expect.any(String)]),
        __typename: 'ProductData',
      })
    )
  );
});
