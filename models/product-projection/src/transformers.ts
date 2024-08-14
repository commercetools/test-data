import {
  LocalizedString,
  Reference,
  type TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import { State, TState } from '@commercetools-test-data/state';
import {
  TaxCategory,
  TTaxCategory,
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
      'categoryOrderHints',
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
      buildFields: [
        'productType',
        'categories',
        'masterVariant',
        'variants',
        'taxCategory',
        'state',
      ],
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
        const productTypeRef = Reference.random()
          .id(fields.productType.id)
          .typeId('product-type')
          .buildGraphql<TReferenceGraphql>();
        const state = fields.state
          ? State.random().id(fields.productType.id).buildGraphql<TState>()
          : undefined;
        const stateRef = fields.state
          ? Reference.random()
              .id(fields.productType.id)
              .typeId('state')
              .buildGraphql<TReferenceGraphql>()
          : undefined;
        const taxCategory = fields.taxCategory
          ? TaxCategory.random()
              .id(fields.productType.id)
              .buildGraphql<TTaxCategory>()
          : undefined;
        const taxCategoryRef = fields.taxCategory
          ? Reference.random()
              .id(fields.productType.id)
              .typeId('tax-category')
              .buildGraphql<TReferenceGraphql>()
          : undefined;
        const categoriesRef = fields.categories.map((category) => ({
          id: category.id,
          typeId: 'category' as const,
          __typename: 'Reference' as const,
        }));
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
            nameAllLocales
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
          productTypeRef,
          state,
          stateRef,
          taxCategory,
          taxCategoryRef,
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
