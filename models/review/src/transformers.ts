import { Transformer } from '@commercetools-test-data/core';
import type { TReview, TReviewGraphql } from './types';

const transformers = {
  default: Transformer<TReview, TReview>('default', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TReview, TReview>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TReview, TReviewGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => ({
      __typename: 'Review',
    }),
  }),
};

export default transformers;
