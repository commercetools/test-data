import {
  CategoryReference,
  ProductVariant,
  SearchKeyword,
} from '@commercetools/platform-sdk';
import * as Category from '@commercetools-test-data/category';
import { TCategoryGraphql } from '@commercetools-test-data/category';
import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import { faker } from '@faker-js/faker';
import type { TProductData, TProductDataGraphql } from './types';

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
    ],
  }),
  rest: Transformer<TProductData, TProductData>('rest', {
    buildFields: [
      'name',
      'categories',
      'description',
      'slug',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
    ],
  }),
  graphql: Transformer<TProductData, TProductDataGraphql>('graphql', {
    /**
     * We choose `replaceFields` because the type of the `categories` field differs
     * between REST and GraphQL, and it must be replaced.
     */
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
      const categoryOrderHint = faker.lorem.word();
      const categoriesRef: Array<CategoryReference> = [
        Reference.presets.category().buildGraphql(),
      ];
      const categories: Array<TCategoryGraphql> = [
        Category.random().buildGraphql(),
      ];
      // TODO: add SearchKeyword when available
      const searchKeyword: Array<SearchKeyword> = [];
      // TODO: Add ProductVariants when available
      const allVariants: Array<ProductVariant> = [];
      // TODO: Add ProductVariant when available
      const variant = null;
      const skus = [faker.random.alphaNumeric(8)];

      return {
        // Include all preexisting fields as we are performing a full replacement
        ...fields,
        nameAllLocales,
        descriptionAllLocales,
        slugAllLocales,
        metaTitleAllLocales,
        metaKeywordsAllLocales,
        metaDescriptionAllLocales,
        categoryOrderHint,
        categoriesRef,
        categories,
        searchKeyword,
        allVariants,
        variant,
        skus,
        __typename: 'ProductData',
      };
    },
  }),
};

export default transformers;
