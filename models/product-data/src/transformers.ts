import { CategoryReference } from '@commercetools/platform-sdk';
import { LocalizedString } from '@commercetools-test-data/commons';
import {
  buildField,
  buildFields,
  Transformer,
} from '@commercetools-test-data/core';
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
    replaceFields: ({ fields }) => {
      const { categories } = fields;

      const categoryReferences: Array<CategoryReference> = buildFields(
        categories,
        'rest'
      ).map((category) => ({
        id: category.id,
        typeId: 'category',
      }));

      /**
       * We cannot use `replaceFields` in conjunction with `buildFields`,
       * so we need to explicity build fields where necessary.
       */
      return {
        // Un-built fields with no model dependencies
        ...fields,
        // These have model dependencies and must be built
        name: buildField(fields.name, 'rest'),
        description: buildField(fields.description, 'rest'),
        slug: buildField(fields.slug, 'rest'),
        metaTitle: buildField(fields.metaTitle, 'rest'),
        metaDescription: buildField(fields.metaDescription, 'rest'),
        metaKeywords: buildField(fields.metaKeywords, 'rest'),
        categories: categoryReferences,
      };
    },
  }),
  graphql: Transformer<TProductData, TProductDataGraphql>('graphql', {
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

      const categoriesRef = buildFields(fields.categories).map((category) => ({
        id: category.id,
        typeId: 'category' as const,
        __typename: 'Reference' as const,
      }));

      return {
        ...fields,
        nameAllLocales,
        descriptionAllLocales,
        slugAllLocales,
        metaTitleAllLocales,
        metaKeywordsAllLocales,
        metaDescriptionAllLocales,
        categoryOrderHints,
        categoryOrderHint,
        categoriesRef,
        categories: buildFields(fields.categories, 'graphql'),
        __typename: 'ProductData',
      };
    },
  }),
};

export default transformers;