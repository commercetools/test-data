/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { Category } from '@commercetools-test-data/category';
import {
  LocalizedField,
  LocalizedString,
  Reference,
} from '@commercetools-test-data/commons';
import { ProductVariant } from '@commercetools-test-data/product';
import { ProductType } from '@commercetools-test-data/product-type';
import { State } from '@commercetools-test-data/state';
import { TaxCategory } from '@commercetools-test-data/tax-category';
import { TProductProjectionGraphql, TProductProjectionRest } from './types';
import { ProductProjectionRest, ProductProjectionGraphql } from './index';

describe('builder', () => {
  it('should build the right rest model', () => {
    const restProductProjection = ProductProjectionRest.presets
      .happyCowMilkProductProjection()
      .categories([
        Reference.presets
          .categoryReference()
          .obj(
            Category.random()
              .id('category-id')
              .name(LocalizedString.presets.empty().en('category-name'))
          ),
      ])
      .categoryOrderHints({
        'category-1': '0.4',
      })
      .id('happy-cow-milk-id')
      .key('happy-cow-milk-key')
      .metaKeywords(LocalizedString.presets.empty().en('happy'))
      .priceMode('Embedded')
      .productType(
        Reference.presets
          .productTypeReference()
          .obj(ProductType.presets.milk().id('product-type-id'))
      )
      .reviewRatingStatistics({
        averageRating: 3.12345,
        highestRating: 4.9,
        lowestRating: 2.1,
        count: 25,
        ratingsDistribution: {},
      })
      .searchKeywords({
        en: [{ text: 'product search keyword' }],
      })
      .state(
        Reference.presets.stateReference().obj(State.random().id('state-id'))
      )
      .taxCategory(
        Reference.presets
          .taxCategoryReference()
          .obj(TaxCategory.random().id('tax-category-id'))
      )
      .variants([ProductVariant.random().key('alternative-variant-key')])
      .version(222)
      .build<TProductProjectionRest>();

    expect(restProductProjection).toEqual(
      expect.objectContaining({
        categories: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'category',
            id: 'category-id',
            obj: expect.objectContaining({
              id: 'category-id',
              name: expect.objectContaining({
                en: 'category-name',
              }),
            }),
          }),
        ]),
        categoryOrderHints: expect.objectContaining({
          'category-1': '0.4',
        }),
        description: expect.objectContaining({
          en: 'Very happy milk produced by very happy cow!',
        }),
        hasStagedChanges: false,
        id: 'happy-cow-milk-id',
        key: 'happy-cow-milk-key',
        masterVariant: expect.objectContaining({
          key: 'happy-cow-master-variant-key',
          sku: 'happy-cow-master-variant-sku',
        }),
        metaDescription: expect.objectContaining({
          en: 'Very happy milk produced by very happy cow!',
        }),
        metaKeywords: expect.objectContaining({
          en: 'happy',
        }),
        metaTitle: expect.objectContaining({
          en: 'Happy Cow Milk',
        }),
        name: expect.objectContaining({
          en: 'Happy Cow Milk',
        }),
        priceMode: 'Embedded',
        productType: expect.objectContaining({
          id: 'product-type-id',
          typeId: 'product-type',
          obj: expect.objectContaining({
            id: 'product-type-id',
            name: 'Milk Product Type',
            attributes: expect.any(Array),
          }),
        }),
        published: true,
        reviewRatingStatistics: expect.objectContaining({
          averageRating: 3.12345,
          highestRating: 4.9,
          lowestRating: 2.1,
          count: 25,
          ratingsDistribution: {},
        }),
        searchKeywords: expect.objectContaining({
          en: expect.arrayContaining([
            {
              text: 'product search keyword',
            },
          ]),
        }),
        slug: expect.objectContaining({
          en: 'happy-cow-milk-slug',
        }),
        // state: expect.objectContaining({
        //   id: 'state-id',
        //   typeId: 'state',
        //   obj: expect.objectContaining({
        //     id: 'state-id',
        //     type: expect.any(String),
        //     initial: expect.any(Boolean),
        //   }),
        // }),
        // taxCategory: expect.objectContaining({
        //   id: 'tax-category-id',
        //   typeId: 'tax-category',
        //   obj: expect.objectContaining({
        //     id: 'tax-category-id',
        //     name: expect.any(String),
        //     rates: expect.any(Array),
        //   }),
        // }),
        variants: expect.arrayContaining([
          expect.objectContaining({
            key: 'alternative-variant-key',
            sku: expect.any(String),
          }),
        ]),
        version: 222,
      })
    );
  });

  it('should build the right graphql model', () => {
    const graphqlProjectionMock = ProductProjectionGraphql.presets
      .happyCowMilkProductProjection()
      .categories([
        Category.random()
          .id('category-id')
          .name(LocalizedString.presets.empty().en('category-name')),
      ])
      .categoriesRef([Reference.presets.categoryReference().id('category-id')])
      .categoryOrderHints([
        {
          categoryId: 'category-1',
          orderHint: '0.4',
          __typename: 'CategoryOrderHint',
        },
      ])
      .id('happy-cow-milk-id')
      .metaDescription('Very happy milk produced by very happy cow!')
      .metaDescriptionAllLocales([
        LocalizedField.random()
          .locale('en')
          .value('Very happy milk produced by very happy cow!'),
      ])
      .metaKeywords('happy')
      .metaKeywordsAllLocales([
        LocalizedField.random().locale('en').value('happy'),
      ])
      .metaTitle('Happy Cow Milk')
      .metaTitleAllLocales([
        LocalizedField.random().locale('en').value('Happy Cow Milk'),
      ])
      .priceMode('Embedded')
      .productType(ProductType.presets.milk().id('product-type-id'))
      .productTypeRef(
        Reference.presets.productTypeReference().id('product-type-id')
      )
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
          locale: 'en',
          searchKeywords: [{ text: 'product search keyword' }],
          __typename: 'SearchKeywordsProductSearch',
        },
      ])
      .state(State.random().id('state-id'))
      .stateRef(Reference.presets.stateReference().id('state-id'))
      .taxCategory(TaxCategory.random().id('tax-category-id'))
      .taxCategoryRef(
        Reference.presets.taxCategoryReference().id('tax-category-id')
      )
      .variants([ProductVariant.random().key('alternative-variant-key')])
      .version(222)
      .build<TProductProjectionGraphql>();

    const expectedLocalizedName = expect.arrayContaining([
      expect.objectContaining({
        locale: 'en',
        value: 'Happy Cow Milk',
      }),
    ]);
    const expectedLocalizedDescription = expect.arrayContaining([
      expect.objectContaining({
        locale: 'en',
        value: 'Very happy milk produced by very happy cow!',
      }),
    ]);

    expect(graphqlProjectionMock).toEqual(
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
            __typename: 'CategoryOrderHint',
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
          }),
        ]),
        metaTitle: 'Happy Cow Milk',
        metaTitleAllLocales: expectedLocalizedName,
        name: 'Happy Cow Milk',
        nameAllLocales: expectedLocalizedName,
        priceMode: 'Embedded',
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
