import {
  LocalizedString,
  Reference,
  type TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { Transformer, buildField } from '@commercetools-test-data/core';
import {
  ProductType,
  TProductTypeGraphql,
} from '@commercetools-test-data/product-type';
import { State, TState, TStateGraphql } from '@commercetools-test-data/state';
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
        'categories',
        'masterVariant',
        'variants',
        // 'taxCategory',
        // 'state',
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

        // const restState = fields.state
        //   ? buildField(fields.state, 'rest')
        //   : buildField(State.random().id(fields.productType.id), 'rest');
        const restState = buildField(fields.state, 'rest');
        const stateRef = buildField(
          fields.state,
          'graphql'
        ) as TReferenceGraphql;
        const state = restState
          ? State.random()
              .id(restState.id)
              .key(restState.obj?.key || '')
              .version(restState.obj?.version || 1)
              .type(restState.obj?.type || 'unknown')
              .buildGraphql<TStateGraphql>()
          : undefined;
        // const stateRef = fields.state
        //   ? Reference.random()
        //       .id(fields.productType.id)
        //       .typeId('state')
        //       .buildGraphql<TReferenceGraphql>()
        //   : undefined;

        console.log('ProductProjection graphql transformer', {
          taxCategory: fields.taxCategory,
        });

        const restTaxCategory = buildField(fields.taxCategory, 'rest');
        const taxCategory = restTaxCategory
          ? TaxCategory.random()
              .id(restTaxCategory.id)
              .key(restTaxCategory.obj?.key || '')
              .name(restTaxCategory.obj?.name || '')
              .description(restTaxCategory.obj?.description || '')
              .version(restTaxCategory.obj?.version || 1)
              .buildGraphql<TTaxCategory>()
          : undefined;
        console.log('ProductProjection graphql transformer', {
          input: fields.taxCategory,
          output: taxCategory,
        });
        // const taxCategoryRef = fields.taxCategory
        //   ? Reference.random()
        //       .id(fields.productType.id)
        //       .typeId('tax-category')
        //       .buildGraphql<TReferenceGraphql>()
        //   : undefined;
        const taxCategoryRef = buildField(
          fields.taxCategory,
          'graphql'
        ) as TReferenceGraphql;
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
          productType,
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
