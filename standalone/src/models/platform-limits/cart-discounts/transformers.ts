import { Transformer } from '@/core';
import {
  TCartDiscountLimitsProjection,
  TCartDiscountLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartDiscountLimitsProjection,
    TCartDiscountLimitsProjection
  >('default', {
    buildFields: ['totalActiveWithoutDiscountCodes'],
  }),
  rest: Transformer<
    TCartDiscountLimitsProjection,
    TCartDiscountLimitsProjection
  >('rest', {
    buildFields: ['totalActiveWithoutDiscountCodes'],
  }),
  graphql: Transformer<
    TCartDiscountLimitsProjection,
    TCartDiscountLimitsProjectionGraphql
  >('graphql', {
    buildFields: ['totalActiveWithoutDiscountCodes'],
    addFields: () => ({
      __typename: 'CartDiscountLimitsProjection',
    }),
  }),
};

export default transformers;
