import { Transformer } from '@/core';
import type { TPrice, TPriceGraphql } from './types';

const transformers = {
  default: Transformer<TPrice, TPrice>('default', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'recurrencePolicyRef',
    ],
  }),
  rest: Transformer<TPrice, TPrice>('rest', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'recurrencePolicyRef',
    ],
  }),
  graphql: Transformer<TPrice, TPriceGraphql>('graphql', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'recurrencePolicyRef',
    ],
    addFields: () => ({
      __typename: 'ProductPrice',
    }),
  }),
};

export default transformers;
