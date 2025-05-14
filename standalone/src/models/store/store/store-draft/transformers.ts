import { Transformer } from '@/core';
import type { TStoreDraft, TStoreDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TStoreDraft, TStoreDraft>('default', {
    buildFields: [
      'name',
      'supplyChannels',
      'distributionChannels',
      'productSelections',
    ],
  }),
  rest: Transformer<TStoreDraft, TStoreDraft>('rest', {
    buildFields: [
      'name',
      'supplyChannels',
      'distributionChannels',
      'productSelections',
    ],
  }),
  //Note that the storeDraft graphql transformer is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TStoreDraft, TStoreDraftGraphql>('graphql', {
    buildFields: [
      'name',
      'supplyChannels',
      'distributionChannels',
      'productSelections',
    ],
  }),
};

export default transformers;
