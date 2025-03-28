/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { Category } from '@commercetools-test-data/category';
import { LocalizedString } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import * as ProductVariant from '../product-variant';
import { TProductData, TProductDataGraphql } from './types';
import * as ProductData from './index';

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
        masterVariant: expect.objectContaining({ id: expect.any(Number) }),
        variant: expect.objectContaining({ id: expect.any(Number) }),
        variants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
        allVariants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
        searchKeywords: expect.arrayContaining([]),
        searchKeyword: expect.arrayContaining([]),
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
        masterVariant: expect.objectContaining({ id: expect.any(Number) }),
        variants: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductData, TProductDataGraphql>(
      'graphql',
      ProductData.random(),
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
        searchKeyword: expect.arrayContaining([]),
        searchKeywords: expect.arrayContaining([]),
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
    const productData = ProductData.random()
      .allVariants([ProductVariant.presets.happyCowMilkMasterVariant()])
      .categories([Category.random().id('category-id-1')])
      .categoryOrderHints({ 'category-id-1': '0.5' })
      .description(LocalizedString.random().en('product description #1'))
      .masterVariant(ProductVariant.presets.happyCowMilkMasterVariant())
      .metaTitle(LocalizedString.random().en('product meta title #1'))
      .metaKeywords(LocalizedString.random().en('product meta keywords #1'))
      .metaDescription(
        LocalizedString.random().en('product meta description #1')
      )
      .name(LocalizedString.random().en('product name #1'))
      .searchKeyword([{ text: 'search-keyword-1' }])
      .searchKeywords({ en: [{ text: 'search-keyword-2' }] })
      .skus(['sku-1', 'sku-2'])
      .slug(LocalizedString.random().en('product-slug-1'))
      .variant(ProductVariant.presets.happyCowMilkMasterVariant())
      .buildGraphql<TProductDataGraphql>();

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
        searchKeyword: expect.arrayContaining([
          expect.objectContaining({
            text: 'search-keyword-1',
          }),
        ]),
        searchKeywords: expect.objectContaining({
          en: expect.arrayContaining([
            expect.objectContaining({
              text: 'search-keyword-2',
            }),
          ]),
        }),
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
