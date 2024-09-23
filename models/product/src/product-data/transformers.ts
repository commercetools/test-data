import { CategoryReference } from '@commercetools/platform-sdk';
import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type {
  TCategoryOrderHintGraphql,
  TProductData,
  TProductDataGraphql,
  TProductDataRest,
} from './types';

const transformers = {
  default: Transformer<TProductData, TProductData>('default', {
    buildFields: [
      'name',
      'categories',
      'description',
      'slug',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'masterVariant',
      'variant',
      'variants',
      'allVariants',
      'searchKeywords',
      'searchKeyword',
    ],
  }),
  rest: Transformer<TProductData, TProductDataRest>('rest', {
    buildFields: [
      'name',
      'description',
      'slug',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'categories',
      'masterVariant',
      'variants',
    ],
    replaceFields: ({ fields }) => {
      const { allVariants, variant, skus, categories, ...rest } = fields;

      const categoryReferences: Array<CategoryReference> = categories.map(
        (category) => ({
          id: category.id,
          typeId: 'category',
          obj: category,
        })
      );

      return {
        ...rest,
        categories: categoryReferences,
      };
    },
  }),
  graphql: Transformer<TProductData, TProductDataGraphql>('graphql', {
    buildFields: [
      'categories',
      'masterVariant',
      'variant',
      'variants',
      'allVariants',
    ],
    replaceFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );
      const slugAllLocales = LocalizedString.toLocalizedField(fields.slug);
      const metaTitleAllLocales = LocalizedString.toLocalizedField(
        fields.metaTitle
      );
      const metaKeywordsAllLocales = LocalizedString.toLocalizedField(
        fields.metaKeywords
      );
      const metaDescriptionAllLocales = LocalizedString.toLocalizedField(
        fields.metaDescription
      );

      const categoryOrderHints: Array<TCategoryOrderHintGraphql> =
        Object.entries(fields.categoryOrderHints || {}).map(([k, v]) => ({
          categoryId: k,
          orderHint: v,
          __typename: 'CategoryOrderHint',
        }));

      const categoryOrderHint: String = Object.values(
        fields.categoryOrderHints || {}
      )[0];

      const categoriesRef = fields.categories.map((category) => ({
        id: category.id,
        typeId: 'category' as const,
        __typename: 'Reference' as const,
      }));

      return {
        ...fields,
        name: LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales)!,
        nameAllLocales,
        description: LocalizedString.resolveGraphqlDefaultLocaleValue(
          descriptionAllLocales
        ),
        descriptionAllLocales,
        slug: LocalizedString.resolveGraphqlDefaultLocaleValue(slugAllLocales)!,
        slugAllLocales,
        metaTitle:
          LocalizedString.resolveGraphqlDefaultLocaleValue(metaTitleAllLocales),
        metaTitleAllLocales,
        metaKeywords: LocalizedString.resolveGraphqlDefaultLocaleValue(
          metaKeywordsAllLocales
        ),
        metaKeywordsAllLocales,
        metaDescription: LocalizedString.resolveGraphqlDefaultLocaleValue(
          metaDescriptionAllLocales
        ),
        metaDescriptionAllLocales,
        categoryOrderHints,
        categoryOrderHint,
        categoriesRef,
        categories: fields.categories,
        __typename: 'ProductData',
      };
    },
  }),
};

export default transformers;
