import { Transformer } from '@commercetools-test-data/core';
import type { TShippingRate, TShippingRateGraphql } from './types';

const transformers = {
  default: Transformer<TShippingRate, TShippingRate>('default', {
    buildFields: ['price', 'freeAbove'],
  }),
  rest: Transformer<TShippingRate, TShippingRate>('rest', {
    buildFields: ['price', 'freeAbove'],
  }),
  graphql: Transformer<TShippingRate, TShippingRateGraphql>('graphql', {
    buildFields: ['price', 'freeAbove'],
    addFields: () => ({
      __typename: 'ShippingRate',
    }),
  }),
};

export default transformers;
