import { Transformer } from '@commercetools-test-data/core';
import type { TPriceDraft, TPriceDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TPriceDraft, TPriceDraft>('default', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
    ],
  }),
  rest: Transformer<TPriceDraft, TPriceDraft>('rest', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
    ],
  }),
  graphql: Transformer<TPriceDraft, TPriceDraftGraphql>('graphql', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
    ],
    addFields: () => ({
      __typename: 'ProductPriceDataInput',
    }),
  }),
};

export default transformers;
