import { Transformer } from '@commercetools-test-data/core';
import type { TShippingInfo, TShippingInfoGraphql } from './types';

const transformers = {
  default: Transformer<TShippingInfo, TShippingInfo>('default', {
    buildFields: [
      'taxCategory',
      'shippingMethod',
      'price',
      'shippingRate',
      'taxedPrice',
      'taxRate',
      'deliveries',
      'discountedPrice',
    ],
  }),
  rest: Transformer<TShippingInfo, TShippingInfo>('rest', {
    buildFields: [
      'taxCategory',
      'shippingMethod',
      'price',
      'shippingRate',
      'taxedPrice',
      'taxRate',
      'deliveries',
      'discountedPrice',
    ],
  }),
  graphql: Transformer<TShippingInfo, TShippingInfoGraphql>('graphql', {
    buildFields: [
      'taxCategory',
      'shippingMethod',
      'price',
      'shippingRate',
      'taxedPrice',
      'taxRate',
      'deliveries',
      'discountedPrice',
    ],
    addFields: () => ({
      __typename: 'ShippingInfo',
    }),
  }),
};

export default transformers;
