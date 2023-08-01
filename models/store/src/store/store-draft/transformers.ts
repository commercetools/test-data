import { Transformer } from '@commercetools-test-data/core';
import type { TStoreDraft } from '../types';

const transformers = {
  default: Transformer<TStoreDraft, TStoreDraft>('default', {
    buildFields: ['name'],
  }),
  rest: Transformer<TStoreDraft, TStoreDraft>('rest', {
    buildFields: ['name'],
  }),
  // StoreDraft/StoreInput does not exist in a graphql format
};

export default transformers;
