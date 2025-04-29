/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { Category } from '@commercetools-test-data/category';
import { LocalizedField } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { ProductVariantGraphql } from '../product-variant';
import { SearchKeywordGraphql } from './search-keyword';
import { SearchKeywordsGraphql } from './search-keywords';
import type { TProductDataRest, TProductDataGraphql } from './types';
import { ProductDataRest, ProductDataGraphql } from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductDataRest, TProductDataRest>(
      'rest',
      ProductDataRest.random(),
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
        masterVariant: expect.objectContaining({ id: expect.any(Number) }),
        variants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductDataGraphql, TProductDataGraphql>(
      'graphql',
      ProductDataGraphql.random(),
      expect.objectContaining({
        name: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        description: expect.any(String),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        slug: expect.any(String),
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
        searchKeyword: expect.arrayContaining([
          expect.objectContaining({
            text: expect.any(String),
          }),
        ]),
        searchKeywords: expect.arrayContaining([
          expect.objectContaining({
            searchKeywords: expect.arrayContaining([
              expect.objectContaining({
                text: expect.any(String),
              }),
            ]),
          }),
        ]),
        metaTitle: expect.any(String),
        metaTitleAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        metaKeywords: expect.any(String),
        metaKeywordsAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        metaDescription: expect.any(String),
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
      })
    )
  );

  it('should allow customization', () => {
    const productData = ProductDataGraphql.random()
      .allVariants([ProductVariantGraphql.presets.happyCowMilkMasterVariant()])
      .categories([Category.random().id('category-id-1')])
      .categoryOrderHints([{ categoryId: 'category-id-1', orderHint: '0.5' }])
      .descriptionAllLocales([
        LocalizedField.random().locale('en').value('product description #1'),
      ])
      .masterVariant(ProductVariantGraphql.presets.happyCowMilkMasterVariant())
      .metaTitleAllLocales([
        LocalizedField.random().locale('en').value('product meta title #1'),
      ])
      .metaKeywordsAllLocales([
        LocalizedField.random().locale('en').value('product meta keywords #1'),
      ])
      .metaDescriptionAllLocales([
        LocalizedField.random()
          .locale('en')
          .value('product meta description #1'),
      ])
      .nameAllLocales([
        LocalizedField.random().locale('en').value('product name #1'),
      ])
      .searchKeywords([
        SearchKeywordsGraphql.random().searchKeywords([
          SearchKeywordGraphql.random().text('search-keyword-1'),
        ]),
      ])
      .skus(['sku-1', 'sku-2'])
      .slugAllLocales([
        LocalizedField.random().locale('en').value('product-slug-1'),
      ])
      .variant(ProductVariantGraphql.presets.happyCowMilkMasterVariant())
      .build();

    expect(productData).toEqual(
      expect.objectContaining({
        allVariants: expect.arrayContaining([
          expect.objectContaining({
            key: 'happy-cow-master-variant-key',
          }),
        ]),
        categories: expect.arrayContaining([
          expect.objectContaining({
            id: 'category-id-1',
          }),
        ]),
        searchKeywords: expect.arrayContaining([
          expect.objectContaining({
            searchKeywords: expect.arrayContaining([
              expect.objectContaining({
                text: 'search-keyword-1',
              }),
            ]),
          }),
        ]),
        categoryOrderHints: expect.arrayContaining([
          expect.objectContaining({
            categoryId: 'category-id-1',
            orderHint: '0.5',
          }),
        ]),
        description: 'product description #1',
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'product description #1',
          }),
        ]),
        masterVariant: expect.objectContaining({
          key: 'happy-cow-master-variant-key',
        }),
        metaTitle: 'product meta title #1',
        metaTitleAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'product meta title #1',
          }),
        ]),
        metaKeywords: 'product meta keywords #1',
        metaKeywordsAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'product meta keywords #1',
          }),
        ]),
        metaDescription: 'product meta description #1',
        metaDescriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'product meta description #1',
          }),
        ]),
        name: 'product name #1',
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'product name #1',
          }),
        ]),
        skus: expect.arrayContaining(['sku-1', 'sku-2']),
        slug: 'product-slug-1',
        slugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'product-slug-1',
          }),
        ]),
        variant: expect.objectContaining({
          key: 'happy-cow-master-variant-key',
        }),
      })
    );
  });
});
