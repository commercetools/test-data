import { Transformer } from '@commercetools-test-data/core';
import type { TProductTypeDraft, TProductTypeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TProductTypeDraft, TProductTypeDraft>('default', {
    buildFields: ['attributes'],
  }),
  rest: Transformer<TProductTypeDraft, TProductTypeDraft>('rest', {
    buildFields: ['attributes'],
  }),
  graphql: Transformer<TProductTypeDraft, TProductTypeDraftGraphql>('graphql', {
    buildFields: ['attributes'],
    addFields: () => ({ __typename: 'ProductTypeDraft' }),
  }),
};

export default transformers;
