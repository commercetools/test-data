import { Transformer } from '@commercetools-test-data/core';
import type { TStandalonePrice, TStandalonePriceGraphQL } from './types';

const transformers = {
  default: Transformer<TStandalonePrice, TStandalonePrice>('default', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TStandalonePrice, TStandalonePrice>('rest', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  graphql: Transformer<TStandalonePrice, TStandalonePriceGraphQL>('graphql', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
    addFields: () => ({
      __typename: 'StandalonePrice',
    }),
  }),
};

export default transformers;
