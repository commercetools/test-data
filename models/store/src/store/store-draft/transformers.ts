import { Transformer } from '@commercetools-test-data/core';
import type { TStoreDraft } from '../types';

const transformers = {
  default: Transformer<TStoreDraft, TStoreDraft>('default', {
    buildFields: ['name'],
  }),
  rest: Transformer<TStoreDraft, TStoreDraft>('rest', {
    buildFields: ['name'],
  }),
  // StoreDraft not supported in GraphQL at this time.
};

export default transformers;
