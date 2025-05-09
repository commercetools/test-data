import { Transformer } from '../../../core';
import {
  TProductDiscountLimitsProjection,
  TProductDiscountLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TProductDiscountLimitsProjection,
    TProductDiscountLimitsProjection
  >('default', {
    buildFields: ['totalActive'],
  }),
  rest: Transformer<
    TProductDiscountLimitsProjection,
    TProductDiscountLimitsProjection
  >('rest', {
    buildFields: ['totalActive'],
  }),
  graphql: Transformer<
    TProductDiscountLimitsProjection,
    TProductDiscountLimitsProjectionGraphql
  >('graphql', {
    buildFields: ['totalActive'],
    addFields: () => ({
      __typename: 'ProductDiscountLimitsProjection',
    }),
  }),
};

export default transformers;
