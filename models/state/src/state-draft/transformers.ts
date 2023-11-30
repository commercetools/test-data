import { Transformer } from '@commercetools-test-data/core';
import type { TStateDraft, TStateDraftGraphql } from '../types';
const transformers = {
  default: Transformer<TStateDraft, TStateDraft>('default', {
    buildFields: ['name', 'description'],
  }),
  rest: Transformer<TStateDraft, TStateDraft>('rest', {
    buildFields: ['name', 'description'],
  }),
  // Note that the StateDraft graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TStateDraft, TStateDraftGraphql>('graphql', {
    buildFields: ['name', 'description'],
  }),
};

export default transformers;
