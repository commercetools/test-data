import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductSelectionDraft,
  TProductSelectionDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TProductSelectionDraft, TProductSelectionDraft>(
    'default',
    {
      buildFields: ['name'],
    }
  ),
  rest: Transformer<TProductSelectionDraft, TProductSelectionDraft>('rest', {
    buildFields: ['name'],
  }),
  // graphql scaffolding only
  graphql: Transformer<TProductSelectionDraft, TProductSelectionDraftGraphql>(
    'graphql',
    {
      buildFields: [],
    }
  ),
};

export default transformers;
