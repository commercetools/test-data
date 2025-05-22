/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { Category } from '@/models/category';
import { LocalizedString } from '@/models/commons';
import { ProductVariant } from '@/models/product/product';
import { ProductType } from '@/models/product-type';
import { State } from '@/models/state';
import { TaxCategory } from '@/models/tax-category';
import { TProductProjectionGraphql, TProductProjectionRest } from './types';
import * as ProductProjection from './index';

describe('builder', () => {
  const expectedGeneralLocalizedString = expect.objectContaining({
    de: expect.any(String),
    en: expect.any(String),
    fr: expect.any(String),
  });
  const expectedGeneralLocalizedField = expect.arrayContaining([
    expect.objectContaining({
      locale: 'en',
      value: expect.any(String),
      __typename: 'LocalizedString',
    }),
  ]);

  it(
    ...createBuilderSpec<TProductProjectionRest, TProductProjectionRest>(
      'rest',
      ProductProjection.ProductProjectionRest.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        productType: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
          version: expect.any(Number),
          createdAt: expect.any(String),
          createdBy: expect.objectContaining({
            customer: expect.objectContaining({ typeId: 'customer' }),
          }),
          lastModifiedAt: expect.any(String),
          lastModifiedBy: expect.objectContaining({
            customer: expect.objectContaining({ typeId: 'customer' }),
          }),
          name: expect.any(String),
          description: expect.any(String),
          attributes: expect.arrayContaining([
            expect.objectContaining({
              type: expect.objectContaining({ name: expect.any(String) }),
              name: expect.any(String),
              label: expectedGeneralLocalizedString,
              isRequired: expect.any(Boolean),
              attributeConstraint: expect.any(String),
              inputTip: expectedGeneralLocalizedString,
              inputHint: expect.any(String),
              isSearchable: expect.any(Boolean),
            }),
          ]),
        }),
        name: expectedGeneralLocalizedString,
        description: expectedGeneralLocalizedString,
        slug: expectedGeneralLocalizedString,
        categories: [],
        categoryOrderHints: null,
        metaTitle: null,
        metaDescription: null,
        metaKeywords: null,
        searchKeywords: [],
        hasStagedChanges: expect.any(Boolean),
        published: expect.any(Boolean),
        masterVariant: expect.objectContaining({
          key: expect.any(String),
          sku: expect.any(String),
          prices: expect.arrayContaining([
            expect.objectContaining({
              value: expect.any(Object),
            }),
          ]),
          price: null,
          images: expect.arrayContaining([
            expect.objectContaining({
              url: expect.any(String),
            }),
          ]),
          attributes: expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ]),
          assets: expect.arrayContaining([]),
          availability: null,
          isMatchingVariant: expect.any(Boolean),
          scopedPrice: null,
          scopedPriceDiscounted: null,
        }),
        variants: [],
        taxCategory: null,
        state: null,
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        reviewRatingStatistics: null,
        priceMode: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProductProjectionGraphql, TProductProjectionGraphql>(
      'graphql',
      ProductProjection.ProductProjectionGraphql.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        productType: expect.objectContaining({
          __typename: 'ProductTypeDefinition',
          id: expect.any(String),
          key: expect.any(String),
        }),
        productTypeRef: expect.objectContaining({
          typeId: 'product-type',
          id: expect.any(String),
          __typename: 'Reference',
        }),
        name: expect.any(String),
        nameAllLocales: expectedGeneralLocalizedField,
        description: expect.any(String),
        descriptionAllLocales: expectedGeneralLocalizedField,
        slug: expect.any(String),
        slugAllLocales: expectedGeneralLocalizedField,
        categories: [],
        categoryOrderHints: [],
        metaTitle: null,
        metaTitleAllLocales: null,
        metaDescription: null,
        metaDescriptionAllLocales: null,
        metaKeywords: null,
        metaKeywordsAllLocales: null,
        searchKeywords: [],
        hasStagedChanges: expect.any(Boolean),
        published: expect.any(Boolean),
        masterVariant: expect.objectContaining({
          __typename: 'ProductVariant',
          key: expect.any(String),
          sku: expect.any(String),
        }),
        variants: [],
        taxCategory: null,
        state: null,
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        reviewRatingStatistics: null,
      })
    )
  );

  it('should allow customization', () => {
    const productProjectionMock =
      ProductProjection.ProductProjectionGraphql.presets
        .happyCowMilk()
        .categories([
          Category.random()
            .id('category-id')
            .name(LocalizedString.presets.empty().en('category-name')),
        ])
        .categoryOrderHints([
          {
            __typename: 'CategoryOrderHintProductSearch',
            categoryId: 'category-1',
            orderHint: '0.4',
          },
        ])
        .id('happy-cow-milk-id')
        .key('happy-cow-milk-key')
        .metaKeywordsAllLocales(LocalizedString.presets.empty().en('happy'))
        .productType(ProductType.presets.milk().id('product-type-id'))
        .reviewRatingStatistics({
          averageRating: 3.12345,
          highestRating: 4.9,
          lowestRating: 2.1,
          count: 25,
          ratingsDistribution: {},
          __typename: 'ReviewRatingStatistics',
        })
        .searchKeywords([
          {
            __typename: 'SearchKeywordsProductSearch',
            locale: 'en',
            searchKeywords: [{ text: 'product search keyword' }],
          },
        ])
        .state(State.random().id('state-id'))
        .taxCategory(TaxCategory.random().id('tax-category-id'))
        .variants([ProductVariant.random().key('alternative-variant-key')])
        .version(222)
        .buildGraphql<TProductProjectionGraphql>();

    const expectedLocalizedName = expect.arrayContaining([
      expect.objectContaining({
        locale: 'en',
        value: 'Happy Cow Milk',
      }),
      expect.objectContaining({
        locale: 'de',
        value: 'Fröhliche Kuhmilch',
      }),
    ]);
    const expectedLocalizedDescription = expect.arrayContaining([
      expect.objectContaining({
        locale: 'en',
        value: 'Very happy milk produced by very happy cow!',
      }),
      expect.objectContaining({
        locale: 'de',
        value: 'Sehr glückliche Milch von sehr glücklicher Kuh!',
      }),
    ]);

    expect(productProjectionMock).toEqual(
      expect.objectContaining({
        categories: expect.arrayContaining([
          expect.objectContaining({
            id: 'category-id',
            name: 'category-name',
            __typename: 'Category',
          }),
        ]),
        categoryOrderHints: expect.arrayContaining([
          {
            categoryId: 'category-1',
            orderHint: '0.4',
            __typename: 'CategoryOrderHintProductSearch',
          },
        ]),
        categoriesRef: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'category',
            id: 'category-id',
            __typename: 'Reference',
          }),
        ]),
        description: 'Very happy milk produced by very happy cow!',
        descriptionAllLocales: expectedLocalizedDescription,
        hasStagedChanges: false,
        id: 'happy-cow-milk-id',
        key: 'happy-cow-milk-key',
        masterVariant: expect.objectContaining({
          __typename: 'ProductVariant',
          key: 'happy-cow-master-variant-key',
          sku: 'happy-cow-master-variant-sku',
        }),
        metaDescription: 'Very happy milk produced by very happy cow!',
        metaDescriptionAllLocales: expectedLocalizedDescription,
        metaKeywords: 'happy',
        metaKeywordsAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'happy',
            __typename: 'LocalizedString',
          }),
        ]),
        metaTitle: 'Happy Cow Milk',
        metaTitleAllLocales: expectedLocalizedName,
        name: 'Happy Cow Milk',
        nameAllLocales: expectedLocalizedName,
        productType: expect.objectContaining({
          __typename: 'ProductTypeDefinition',
          name: 'Milk Product Type',
        }),
        productTypeRef: expect.objectContaining({
          typeId: 'product-type',
          id: 'product-type-id',
          __typename: 'Reference',
        }),
        published: true,
        reviewRatingStatistics: expect.objectContaining({
          averageRating: 3.12345,
          highestRating: 4.9,
          lowestRating: 2.1,
          count: 25,
          ratingsDistribution: {},
          __typename: 'ReviewRatingStatistics',
        }),
        searchKeywords: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            searchKeywords: [
              {
                text: 'product search keyword',
                suggestTokenizer: undefined,
              },
            ],
            __typename: 'SearchKeywordsProductSearch',
          }),
        ]),
        slug: 'happy-cow-milk-slug',
        slugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'happy-cow-milk-slug',
          }),
        ]),
        state: expect.objectContaining({
          id: 'state-id',
          __typename: 'State',
        }),
        stateRef: expect.objectContaining({
          id: 'state-id',
          typeId: 'state',
          __typename: 'Reference',
        }),
        taxCategory: expect.objectContaining({
          id: 'tax-category-id',
          __typename: 'TaxCategory',
        }),
        taxCategoryRef: expect.objectContaining({
          id: 'tax-category-id',
          typeId: 'tax-category',
          __typename: 'Reference',
        }),
        variants: expect.arrayContaining([
          expect.objectContaining({
            key: 'alternative-variant-key',
            __typename: 'ProductVariant',
          }),
        ]),
        version: 222,
      })
    );
  });
});
