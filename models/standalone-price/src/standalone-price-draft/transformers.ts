import { Transformer } from '@commercetools-test-data/core';
import type {
  TStandalonePriceDraft,
  TStandalonePriceDraftGraphQL,
} from '../types';

const transformers = {
  default: Transformer<TStandalonePriceDraft, TStandalonePriceDraft>(
    'default',
    {
      buildFields: [
        'value',
        'customerGroup',
        'channel',
        'tiers',
        'discounted',
        'custom',
      ],
    }
  ),
  rest: Transformer<TStandalonePriceDraft, TStandalonePriceDraft>('rest', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
    ],
  }),
  graphql: Transformer<TStandalonePriceDraft, TStandalonePriceDraftGraphQL>(
    'graphql',
    {
      buildFields: [
        'value',
        'customerGroup',
        'channel',
        'tiers',
        'discounted',
        'custom',
      ],
      addFields: () => ({
        __typename: 'StandalonePriceDraft',
      }),
    }
  ),
};

export default transformers;
