import { Transformer } from '@commercetools-test-data/core';
import { LocalizedString } from '@commercetools-test-data/commons';
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
      'slug',
      'ancestors',
      'parent',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'custom',
      'assets',
    ],
    addFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );

      return {
        __typename: 'Category',
        nameAllLocales,
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
