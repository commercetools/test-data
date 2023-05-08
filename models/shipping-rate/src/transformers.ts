import { Transformer } from '@commercetools-test-data/core';
import type { TShippingRate, TShippingRateGraphql } from './types';

const transformers = {
  default: Transformer<TShippingRate, TShippingRate>('default', {
    buildFields: [],
  }),
  rest: Transformer<TShippingRate, TShippingRate>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TShippingRate, TShippingRateGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ShippingRate',
    }),
  }),
};

export default transformers;
