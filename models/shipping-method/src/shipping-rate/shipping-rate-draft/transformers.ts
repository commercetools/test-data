import { Transformer } from '@commercetools-test-data/core';
import type { TShippingRateDraft, TShippingRateDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TShippingRateDraft, TShippingRateDraft>('default', {
    buildFields: ['price', 'freeAbove', 'tiers'],
  }),
  rest: Transformer<TShippingRateDraft, TShippingRateDraft>('rest', {
    buildFields: ['price', 'freeAbove', 'tiers'],
  }),
  graphql: Transformer<TShippingRateDraft, TShippingRateDraftGraphql>(
    'graphql',
    {
      buildFields: ['price', 'freeAbove', 'tiers'],
      addFields: () => ({ __typename: 'ShippingRateDraft' }),
    }
  ),
};

export default transformers;
