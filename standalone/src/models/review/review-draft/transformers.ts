import { Transformer } from '@/core';
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
  }),
};

export default transformers;
