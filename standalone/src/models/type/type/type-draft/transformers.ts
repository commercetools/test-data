import { Transformer } from '@/core';
import type { TTypeDraft, TTypeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TTypeDraft, TTypeDraft>('default', {
    buildFields: ['name', 'description', 'fieldDefinitions'],
  }),
  rest: Transformer<TTypeDraft, TTypeDraft>('rest', {
    buildFields: ['name', 'description', 'fieldDefinitions'],
  }),
  // Note that the TypeDraft graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TTypeDraft, TTypeDraftGraphql>('graphql', {
    buildFields: ['name', 'description', 'fieldDefinitions'],
  }),
};

export default transformers;
