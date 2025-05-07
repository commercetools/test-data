import { Category } from '@commercetools-test-data/category';
import { LocalizedField } from '@commercetools-test-data/commons';
import { ProductVariantGraphql } from '../product-variant';
import { CategoryOrderHintGraphql } from './category-order-hint';
import { SearchKeywordGraphql } from './search-keyword';
import { SearchKeywordsGraphql } from './search-keywords';
import type { TProductDataRest, TProductDataGraphql } from './types';
import { ProductDataRest, ProductDataGraphql, ProductData } from './index';

function validateRestModel(restModel: TProductDataRest) {
  expect(restModel).toEqual(
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
  );
}

function validateGraphqlModel(graphqlModel: TProductDataGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      __typename: 'ProductData',
      name: expect.any(String),
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      description: expect.any(String),
      descriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      slug: expect.any(String),
      slugAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
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
          __typename: 'Reference',
          typeId: 'category',
          id: expect.any(String),
        },
      ]),
      categories: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'Category',
          id: expect.any(String),
          key: expect.any(String),
        }),
      ]),
      searchKeyword: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'SearchKeyword',
          text: expect.any(String),
        }),
      ]),
      searchKeywords: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'SearchKeywords',
          searchKeywords: expect.arrayContaining([
            expect.objectContaining({
              __typename: 'SearchKeyword',
              text: expect.any(String),
            }),
          ]),
        }),
      ]),
      metaTitle: expect.any(String),
      metaTitleAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      metaKeywords: expect.any(String),
      metaKeywordsAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      metaDescription: expect.any(String),
      metaDescriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      masterVariant: expect.objectContaining({
        __typename: 'ProductVariant',
        id: expect.any(Number),
      }),
      variant: expect.objectContaining({
        __typename: 'ProductVariant',
        id: expect.any(Number),
      }),
      variants: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'ProductVariant',
          id: expect.any(Number),
        }),
      ]),
      allVariants: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'ProductVariant',
          id: expect.any(Number),
        }),
      ]),
      skus: expect.arrayContaining([expect.any(String)]),
    })
  );
}

describe('Product model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductDataRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductDataGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });

  it('builds a GraphQL model (with customizations)', () => {
    const graphqlModel = ProductDataGraphql.random()
      .allVariants([ProductVariantGraphql.presets.happyCowMilkMasterVariant()])
      .categories([Category.random().id('category-id-1')])
      .categoryOrderHints([
        CategoryOrderHintGraphql.random()
          .categoryId('category-id-1')
          .orderHint('0.5'),
      ])
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

    expect(graphqlModel).toEqual(
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

describe('Product model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ProductData.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductData.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ProductData.random().buildGraphql<TProductDataGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
