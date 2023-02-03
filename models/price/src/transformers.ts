import { Transformer } from '@commercetools-test-data/core';
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
    ],
    addFields: () => ({
      __typename: 'ProductPrice',
    }),
  }),
};

export default transformers;
