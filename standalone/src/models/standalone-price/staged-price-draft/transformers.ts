import { Transformer } from '@/core';
import type { TStagedPriceDraft, TStagedPriceDraftGraphql } from './types';

const transformers = {
  default: Transformer<TStagedPriceDraft, TStagedPriceDraft>('default', {
    buildFields: ['value'],
  }),
  rest: Transformer<TStagedPriceDraft, TStagedPriceDraft>('rest', {
    buildFields: ['value'],
  }),
  graphql: Transformer<TStagedPriceDraft, TStagedPriceDraftGraphql>('graphql', {
    buildFields: ['value'],
  }),
};

export default transformers;
