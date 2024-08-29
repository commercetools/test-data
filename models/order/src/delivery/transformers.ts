import { Transformer } from '@commercetools-test-data/core';
import type { TDelivery, TDeliveryGraphql } from './types';

const transformers = {
  default: Transformer<TDelivery, TDelivery>('default', {
    buildFields: ['items', 'parcels', 'address'],
  }),
  rest: Transformer<TDelivery, TDelivery>('rest', {
    buildFields: ['items', 'parcels', 'address'],
  }),
  graphql: Transformer<TDelivery, TDeliveryGraphql>('graphql', {
    buildFields: ['items', 'parcels', 'address'],
    addFields: () => ({
      __typename: 'Delivery',
    }),
  }),
};

export default transformers;
