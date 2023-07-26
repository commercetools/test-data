import { Transformer } from '@commercetools-test-data/core';
import type { TProductSelectionDraft } from '../types';

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
  // ProductSelectionDraft/ProductSelectionInput does not exist in a graphql format
};

export default transformers;
