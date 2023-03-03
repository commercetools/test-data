import { Transformer } from '@commercetools-test-data/core';
import type { TProductDraft, TProductDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TProductDraft, TProductDraft>('default', {
    buildFields: [
      'name',
      'productType',
      'slug',
      'description',
      'categories',
      'masterVariant',
      'variants',
      'taxCategory',
      'state',
    ],
  }),
  rest: Transformer<TProductDraft, TProductDraft>('rest', {
    buildFields: [
      'name',
      'productType',
      'slug',
      'description',
      'categories',
      'masterVariant',
      'variants',
      'taxCategory',
      'state',
    ],
  }),
  graphql: Transformer<TProductDraft, TProductDraftGraphql>('graphql', {
    buildFields: [
      'name',
      'productType',
      'slug',
      'description',
      'categories',
      'masterVariant',
      'variants',
      'taxCategory',
      'state',
    ],
    addFields: () => ({ __typename: 'ProductDraft' }),
  }),
};

export default transformers;
