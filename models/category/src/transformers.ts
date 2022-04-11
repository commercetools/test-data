import { Transformer } from '@commercetools-test-data/core';
import {
  LocalizedString,
  type TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TCategory, TCategoryGraphql } from './types';

const transformers = {
  default: Transformer<TCategory, TCategory>('default', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'slug',
      'description',
      'ancestors',
      'parent',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'custom',
      'assets',
    ],
  }),
  rest: Transformer<TCategory, TCategory>('rest', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'slug',
      'description',
      'ancestors',
      'parent',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'custom',
      'assets',
    ],
  }),
  graphql: Transformer<TCategory, TCategoryGraphql>('graphql', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'slug',
      'description',
      'ancestors',
      'parent',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'custom',
      'assets',
    ],
    addFields: () => {
      const nameAllLocales =
        LocalizedString.random().buildGraphql<TLocalizedStringGraphql>();
      const descriptionAllLocales =
        LocalizedString.random().buildGraphql<TLocalizedStringGraphql>();

      return {
        __typename: 'Category',
        nameAllLocales,
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
