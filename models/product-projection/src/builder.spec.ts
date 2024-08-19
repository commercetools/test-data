/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { Category } from '@commercetools-test-data/category';
import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { ProductVariant } from '@commercetools-test-data/product';
import {
  ProductType,
  TProductType,
} from '@commercetools-test-data/product-type';
import {
  TProductProjection,
  TProductProjectionGraphql,
  TProductProjectionRest,
} from './types';
import * as ProductProjection from './index';
import { State } from '@commercetools-test-data/state';
import { TaxCategory } from '@commercetools-test-data/tax-category';

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

  it('Base', () => {
    const restProductProjection = ProductProjection.random()
      .productType(
        Reference.presets
          .productTypeReference()
          .obj(ProductType.presets.milk().id('product-type-id'))
      )
      .buildRest<TProductProjectionRest>();
    // const graphqlProductProjection =
    //   ProductProjection.random().buildGraphql<TProductProjectionGraphql>();
    // console.log({
    //   rest: restProductProjection.productType,
    //   graphql: graphqlProductProjection.productType,
    //   gqlProductTypeRef: graphqlProductProjection.productTypeRef,
    // });

    // const productTypeRef = Reference.presets
    //   .productTypeReference()
    //   .typeId('product-type')
    //   .obj(ProductType.presets.milk().id('product-type-id'))
    //   .buildRest<TProductType>();

    console.log({ restProductProjection: restProductProjection.productType });

    // const ref = Reference.random()
    //   .typeId('product-type')
    //   .obj(ProductType.random().id('isla-bonita'));
    // console.log({
    //   rawRef: ref,
    //   restRef: ref.buildRest<TProductType>(),
    //   graphqlRef: ref.buildGraphql<TProductType>(),
    // });
  });

  it(
    ...createBuilderSpec<TProductProjection, TProductProjection>(
      'default',
      ProductProjection.random(),
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
              label: expect.objectContaining({
                de: expect.any(String),
                en: expect.any(String),
                fr: expect.any(String),
              }),
              isRequired: expect.any(Boolean),
              attributeConstraint: expect.any(String),
              inputTip: expect.objectContaining({
                de: expect.any(String),
                en: expect.any(String),
                fr: expect.any(String),
              }),
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
    ...createBuilderSpec<TProductProjection, TProductProjectionRest>(
      'rest',
      ProductProjection.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        productType: expect.objectContaining({
          id: expect.any(String),
          typeId: expect.any(String),
          obj: expect.objectContaining({
            id: expect.any(String),
            key: expect.any(String),
            version: expect.any(Number),
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
    ...createBuilderSpec<TProductProjection, TProductProjectionGraphql>(
      'graphql',
      ProductProjection.random(),
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
        metaTitle: undefined,
        metaDescription: undefined,
        metaKeywords: undefined,
        searchKeywords: [],
        hasStagedChanges: expect.any(Boolean),
        published: expect.any(Boolean),
        masterVariant: expect.objectContaining({
          __typename: 'ProductVariant',
          key: expect.any(String),
          sku: expect.any(String),
        }),
        variants: [],
        taxCategory: undefined,
        state: undefined,
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        reviewRatingStatistics: undefined,
        priceMode: null,
      })
    )
  );

  describe('when customizing the model', () => {
    const productProjectionMock = ProductProjection.presets
      .happyCowMilkProductProjection()
      .categories([
        Category.random()
          .id('category-id')
          .name(LocalizedString.presets.empty().en('category-name')),
      ])
      .categoryOrderHints({
        'category-1': '0.4',
      })
      .id('happy-cow-milk-id')
      .key('happy-cow-milk-key')
      .metaKeywords(LocalizedString.presets.empty().en('happy'))
      .priceMode('Embedded')
      // .productType(ProductType.presets.milk().id('product-type-id'))
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
      .version(222);

    it.todo('should build the right rest model');

    it.only('should build the right graphql model', () => {
      const grapqlProductProjection =
        productProjectionMock.buildGraphql<TProductProjectionGraphql>();

      console.log({
        productType: grapqlProductProjection.taxCategory,
        productTypeRef: grapqlProductProjection.taxCategoryRef,
      });

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

      expect(grapqlProductProjection).toEqual(
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
});
