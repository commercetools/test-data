import { Transformer } from '@commercetools-test-data/core';
import type { TTypeDraft, TTypeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TTypeDraft, TTypeDraft>('default', {
    buildFields: ['name', 'description'],
  }),
  rest: Transformer<TTypeDraft, TTypeDraft>('rest', {
    buildFields: ['name', 'description'],
  }),
  // Note that the TypeDraft graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TTypeDraft, TTypeDraftGraphql>('graphql', {
    buildFields: ['name', 'description'],
  }),
};

export default transformers;
