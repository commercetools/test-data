import { Transformer } from '@commercetools-test-data/core';
import { TMoneyGraphql } from '../../money';
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
    replaceFields: ({ fields }) => ({
      ...fields,
      value: {
        centPrecision: fields.value as TMoneyGraphql,
      },
    }),
  }),
};

export default transformers;
