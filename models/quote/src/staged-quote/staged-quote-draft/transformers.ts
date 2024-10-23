import { Transformer } from '@commercetools-test-data/core';
import type { TStagedQuoteDraft, TStagedQuoteDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TStagedQuoteDraft, TStagedQuoteDraft>('default', {
    buildFields: ['quoteRequest', 'state', 'custom'],
  }),
  rest: Transformer<TStagedQuoteDraft, TStagedQuoteDraft>('rest', {
    buildFields: ['quoteRequest', 'state', 'custom'],
  }),
  graphql: Transformer<TStagedQuoteDraft, TStagedQuoteDraftGraphql>('graphql', {
    buildFields: ['quoteRequest', 'state', 'custom'],
  }),
};

export default transformers;
