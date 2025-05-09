import { Transformer } from '../../../core';
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

  graphql: Transformer<TProductSelectionDraft, TProductSelectionDraftGraphql>(
    'graphql',
    {
      buildFields: ['name'],
    }
  ),
};

export default transformers;
