import { Transformer } from '@commercetools-test-data/core';
import type { TCategory, TCategoryGraphql, TCategoryRest } from './types';

const transformers = {
  default: Transformer<TCategory, TCategoryRest>('default', {
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
  rest: Transformer<TCategory, TCategoryRest>('rest', {
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
    addFields: () => ({
      __typename: 'Category',
    }),
  }),
};

export default transformers;
