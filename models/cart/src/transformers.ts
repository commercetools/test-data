import { Transformer } from '@commercetools-test-data/core';
import type { TCart, TCartGraphql } from './types';

const transformers = {
  default: Transformer<TCart, TCart>('default', {
    buildFields: [
      'customerGroup',
      'businessUnit',
      'lineItems',
      'shippingAddress',
      'billingAddress',
      'totalPrice',
      'refusedGifts',
      'createdBy',
      'lastModifiedBy',
      'itemShippingAddresses',
    ],
  }),
  rest: Transformer<TCart, TCart>('rest', {
    buildFields: [
      'customerGroup',
      'businessUnit',
      'lineItems',
      'shippingAddress',
      'billingAddress',
      'totalPrice',
      'refusedGifts',
      'createdBy',
      'lastModifiedBy',
      'itemShippingAddresses',
    ],
  }),
  graphql: Transformer<TCart, TCartGraphql>('graphql', {
    buildFields: [
      'customerGroup',
      'businessUnit',
      'lineItems',
      'shippingAddress',
      'billingAddress',
      'totalPrice',
      'refusedGifts',
      'createdBy',
      'lastModifiedBy',
      'itemShippingAddresses',
    ],
    addFields: () => ({
      __typename: 'Cart',
    }),
  }),
};

export default transformers;
