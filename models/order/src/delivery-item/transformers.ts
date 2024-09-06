import { Transformer } from '@commercetools-test-data/core';
import type { TDeliveryItem, TDeliveryItemGraphql } from './types';

const transformers = {
  default: Transformer<TDeliveryItem, TDeliveryItem>('default', {
    buildFields: [],
  }),
  rest: Transformer<TDeliveryItem, TDeliveryItem>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TDeliveryItem, TDeliveryItemGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'DeliveryItem',
    }),
  }),
};

export default transformers;
