import { Transformer } from '@/core';
import {
  TShippingMethodLimitsProjection,
  TShippingMethodLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TShippingMethodLimitsProjection,
    TShippingMethodLimitsProjection
  >('default', {
    buildFields: ['total'],
  }),
  rest: Transformer<
    TShippingMethodLimitsProjection,
    TShippingMethodLimitsProjection
  >('rest', {
    buildFields: ['total'],
  }),
  graphql: Transformer<
    TShippingMethodLimitsProjection,
    TShippingMethodLimitsProjectionGraphql
  >('graphql', {
    buildFields: ['total'],
    addFields: () => ({
      __typename: 'ShippingMethodLimitsProjection',
    }),
  }),
};

export default transformers;
