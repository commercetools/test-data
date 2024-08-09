import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TCategory, TCategoryGraphql } from './types';

const buildFields: Array<keyof TCategory> = [
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
];

const transformers = {
  default: Transformer<TCategory, TCategory>('default', {
    buildFields,
  }),
  rest: Transformer<TCategory, TCategory>('rest', {
    buildFields,
  }),
  graphql: Transformer<TCategory, TCategoryGraphql>('graphql', {
    buildFields,
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
