import { Transformer } from '@commercetools-test-data/core';
import type { TShippingInfo, TShippingInfoGraphql } from './types';

const buildFields: (keyof TShippingInfo)[] = [
  'taxCategory',
  'shippingMethod',
  'price',
  'shippingRate',
  'taxedPrice',
  'taxRate',
  'deliveries',
  'discountedPrice',
];

const transformers = {
  default: Transformer<TShippingInfo, TShippingInfo>('default', {
    buildFields,
  }),
  rest: Transformer<TShippingInfo, TShippingInfo>('rest', {
    buildFields,
  }),
  graphql: Transformer<TShippingInfo, TShippingInfoGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'ShippingInfo',
    }),
  }),
};

export default transformers;
