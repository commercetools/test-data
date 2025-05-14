import { Transformer } from '@/core';
import type { TDelivery, TDeliveryGraphql } from './types';

const buildFields: Array<keyof TDelivery> = [
  'items',
  'parcels',
  'address',
  'custom',
];

const transformers = {
  default: Transformer<TDelivery, TDelivery>('default', {
    buildFields,
  }),
  rest: Transformer<TDelivery, TDelivery>('rest', {
    buildFields,
  }),
  graphql: Transformer<TDelivery, TDeliveryGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'Delivery',
    }),
  }),
};

export default transformers;
