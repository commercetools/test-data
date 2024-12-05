import { Transformer } from '@commercetools-test-data/core';
import {
  TCustomerLimitsProjection,
  TCustomerLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomerLimitsProjection, TCustomerLimitsProjection>(
    'default',
    {
      buildFields: ['total'],
    }
  ),
  rest: Transformer<TCustomerLimitsProjection, TCustomerLimitsProjection>(
    'rest',
    {
      buildFields: ['total'],
    }
  ),
  graphql: Transformer<
    TCustomerLimitsProjection,
    TCustomerLimitsProjectionGraphql
  >('graphql', {
    buildFields: ['total'],
    addFields: () => ({
      __typename: 'CustomerLimitsProjection',
    }),
  }),
};

export default transformers;
