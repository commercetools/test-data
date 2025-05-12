import { Transformer } from '../../../core';
import type { TShippingRate, TShippingRateGraphql } from './types';

const transformers = {
  default: Transformer<TShippingRate, TShippingRate>('default', {
    buildFields: ['price', 'freeAbove', 'tiers'],
  }),
  rest: Transformer<TShippingRate, TShippingRate>('rest', {
    buildFields: ['price', 'freeAbove', 'tiers'],
  }),
  graphql: Transformer<TShippingRate, TShippingRateGraphql>('graphql', {
    buildFields: ['price', 'freeAbove', 'tiers'],
    addFields: () => ({
      __typename: 'ShippingRate',
    }),
  }),
};

export default transformers;
