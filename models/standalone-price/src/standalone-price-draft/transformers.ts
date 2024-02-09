import { Transformer } from '@commercetools-test-data/core';
import type {
  TStandalonePriceDraft,
  TStandalonePriceDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TStandalonePriceDraft, TStandalonePriceDraft>(
    'default',
    { buildFields: ['value', 'customerGroup', 'channel', 'tiers'] }
  ),
  rest: Transformer<TStandalonePriceDraft, TStandalonePriceDraft>('rest', {
    buildFields: ['value', 'customerGroup', 'channel', 'tiers'],
  }),
  graphql: Transformer<TStandalonePriceDraft, TStandalonePriceDraftGraphql>(
    'graphql',
    {
      buildFields: ['value', 'customerGroup', 'channel', 'tiers'],
    }
  ),
};

export default transformers;
