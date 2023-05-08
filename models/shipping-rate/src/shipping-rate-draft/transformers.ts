import { Transformer } from '@commercetools-test-data/core';
import type { TShippingRateDraft, TShippingRateDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TShippingRateDraft, TShippingRateDraft>('default', {
    buildFields: ['price', 'freeAbove'],
  }),
  rest: Transformer<TShippingRateDraft, TShippingRateDraft>('rest', {
    buildFields: ['price', 'freeAbove'],
  }),
  graphql: Transformer<TShippingRateDraft, TShippingRateDraftGraphql>(
    'graphql',
    {
      buildFields: ['price', 'freeAbove'],
      addFields: () => ({ __typename: 'ShippingRateDraft' }),
    }
  ),
};

export default transformers;
