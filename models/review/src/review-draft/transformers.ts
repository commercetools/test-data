import { Transformer } from '@commercetools-test-data/core';
import type { TReviewDraft, TReviewDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TReviewDraft, TReviewDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TReviewDraft, TReviewDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TReviewDraft, TReviewDraftGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ReviewDraft',
    }),
  }),
};

export default transformers;
