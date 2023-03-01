import { Transformer } from '@commercetools-test-data/core';
import type { TProductTypeDraft, TProductTypeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TProductTypeDraft, TProductTypeDraft>('default', {
    buildFields: ['attributes', 'attributeDefinitions'],
  }),
  rest: Transformer<TProductTypeDraft, TProductTypeDraft>('rest', {
    buildFields: ['attributes'],
    removeFields: ['attributeDefinitions'],
  }),
  graphql: Transformer<TProductTypeDraft, TProductTypeDraftGraphql>('graphql', {
    buildFields: ['attributeDefinitions'],
    removeFields: ['attributes'],
    addFields: () => ({
      __typename: 'ProductTypeDraft',
    }),
  }),
};

export default transformers;
