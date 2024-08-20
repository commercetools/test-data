import {
  Category,
  TCategory,
  TCategoryGraphql,
} from '@commercetools-test-data/category';
import {
  LocalizedString,
  Reference,
  TReferenceRest,
  type TReferenceGraphql,
} from '@commercetools-test-data/commons';
import {
  Transformer,
  buildField,
  buildFields,
} from '@commercetools-test-data/core';
import {
  ProductType,
  TProductType,
  TProductTypeGraphql,
} from '@commercetools-test-data/product-type';
import { State, TState, TStateGraphql } from '@commercetools-test-data/state';
import {
  TaxCategory,
  TTaxCategory,
  TTaxCategoryGraphql,
} from '@commercetools-test-data/tax-category';
import type {
  TCategoryOrderHintGraphql,
  TProductProjection,
  TProductProjectionGraphql,
  TProductProjectionRest,
  TSearchKeywords,
} from './types';

const transformers = {
  default: Transformer<TProductProjection, TProductProjection>('default', {
    buildFields: [
      'productType',
      'name',
      'description',
      'slug',
      'categories',
      'categoryOrderHints',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'searchKeywords',
      'masterVariant',
      'variants',
      'taxCategory',
      'state',
    ],
  }),
  rest: Transformer<TProductProjection, TProductProjectionRest>('rest', {
    buildFields: [
      'productType',
      'name',
      'description',
      'slug',
      'categories',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'masterVariant',
      'variants',
      'taxCategory',
      'state',
    ],
  }),
  graphql: Transformer<TProductProjection, TProductProjectionGraphql>(
    'graphql',
    {
      buildFields: ['masterVariant', 'variants'],
      replaceFields: ({ fields }) => {
        const nameAllLocales = LocalizedString.toLocalizedField(fields.name)!;
        const descriptionAllLocales = LocalizedString.toLocalizedField(
          fields.description
        );
        const slugAllLocales = LocalizedString.toLocalizedField(fields.slug)!;
        const metaTitleAllLocales = LocalizedString.toLocalizedField(
          fields.metaTitle
        );
        const metaKeywordsAllLocales = LocalizedString.toLocalizedField(
          fields.metaKeywords
        );
        const metaDescriptionAllLocales = LocalizedString.toLocalizedField(
          fields.metaDescription
        );

        const restProductType = buildField(fields.productType, 'rest');
        const productTypeRef = buildField(
          fields.productType,
          'graphql'
        ) as TReferenceGraphql;
        const productType = ProductType.random()
          .description(restProductType.obj?.description || '')
          .id(restProductType.id)
          .key(restProductType.obj?.key || '')
          .name(restProductType.obj?.name || '')
          .buildGraphql<TProductTypeGraphql>();

        let state: TStateGraphql | null = null;
        let stateRef: TReferenceGraphql | null = null;
        if (fields.state) {
          const restState = buildField(fields.state, 'rest');
          stateRef = buildField(fields.state, 'graphql') as TReferenceGraphql;
          state = State.random()
            .id(restState.id)
            .key(restState.obj?.key || '')
            .version(restState.obj?.version || 1)
            .type(restState.obj?.type || 'unknown')
            .buildGraphql<TStateGraphql>();
        }

        let taxCategory: TTaxCategoryGraphql | null = null;
        let taxCategoryRef: TReferenceGraphql | null = null;
        if (fields.taxCategory) {
          const restTaxCategory = buildField(fields.taxCategory, 'rest');
          taxCategory = TaxCategory.random()
            .id(restTaxCategory.id)
            .key(restTaxCategory.obj?.key || '')
            .name(restTaxCategory.obj?.name || '')
            .description(restTaxCategory.obj?.description || '')
            .version(restTaxCategory.obj?.version || 1)
            .buildGraphql<TTaxCategoryGraphql>();
          taxCategoryRef = buildField(
            fields.taxCategory,
            'graphql'
          ) as TReferenceGraphql;
        }

        const categories = fields.categories
          .map((category) => {
            const restCategory = buildField(category, 'rest');
            const categoryObj = restCategory.obj;
            if (categoryObj) {
              return Category.random()
                .id(categoryObj.id)
                .key(categoryObj.key || '')
                .name(LocalizedString.presets.empty().en(categoryObj.name.en))
                .version(categoryObj.version || 1)
                .buildGraphql<TCategoryGraphql>();
            }
            return undefined;
          })
          .filter((category) => !!category);
        const categoriesRef = buildFields(
          fields.categories,
          'graphql'
        ) as TReferenceGraphql[];

        const categoryOrderHints: Array<TCategoryOrderHintGraphql> =
          Object.entries(fields.categoryOrderHints || {}).map(
            ([key, value]) => ({
              categoryId: key,
              orderHint: value,
              __typename: 'CategoryOrderHint',
            })
          );

        const searchKeywords: Array<TSearchKeywords> = Object.entries(
          fields.searchKeywords || {}
        ).map(([locale, searchKeywords]) => ({
          locale,
          searchKeywords: searchKeywords.map((searchKeyword) => ({
            text: searchKeyword.text,
            suggestTokenizer: searchKeyword.suggestTokenizer,
          })),
          __typename: 'SearchKeywordsProductSearch',
        }));

        const reviewRatingStatistics = fields.reviewRatingStatistics
          ? {
              ...fields.reviewRatingStatistics,
              __typename: 'ReviewRatingStatistics' as const,
            }
          : undefined;

        return {
          ...fields,
          name: LocalizedString.resolveGraphqlDefaultLocaleValue(
            nameAllLocales!
          )!,
          nameAllLocales,
          description: LocalizedString.resolveGraphqlDefaultLocaleValue(
            descriptionAllLocales
          ),
          descriptionAllLocales,
          slug: LocalizedString.resolveGraphqlDefaultLocaleValue(
            slugAllLocales
          )!,
          slugAllLocales,
          metaTitle:
            LocalizedString.resolveGraphqlDefaultLocaleValue(
              metaTitleAllLocales
            ),
          metaTitleAllLocales,
          metaKeywords: LocalizedString.resolveGraphqlDefaultLocaleValue(
            metaKeywordsAllLocales
          ),
          metaKeywordsAllLocales,
          metaDescription: LocalizedString.resolveGraphqlDefaultLocaleValue(
            metaDescriptionAllLocales
          ),
          metaDescriptionAllLocales,
          reviewRatingStatistics,
          productType,
          productTypeRef,
          state,
          stateRef,
          taxCategory,
          taxCategoryRef,
          categories,
          categoriesRef,
          categoryOrderHints,
          searchKeywords,
          __typename: 'ProductProjection',
        };
      },
    }
  ),
};
export default transformers;
