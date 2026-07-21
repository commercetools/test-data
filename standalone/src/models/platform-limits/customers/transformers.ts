import { Transformer } from '@/core';
import {
  TCustomerLimitsProjection,
  TCustomerLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomerLimitsProjection, TCustomerLimitsProjection>(
    'default',
    {
      buildFields: ['total', 'maxGroupsPerCustomer'],
    }
  ),
  rest: Transformer<TCustomerLimitsProjection, TCustomerLimitsProjection>(
    'rest',
    {
      buildFields: ['total', 'maxGroupsPerCustomer'],
    }
  ),
  graphql: Transformer<
    TCustomerLimitsProjection,
    TCustomerLimitsProjectionGraphql
  >('graphql', {
    buildFields: ['total', 'maxGroupsPerCustomer'],
    addFields: () => ({
      __typename: 'CustomerLimitsProjection',
    }),
  }),
};

export default transformers;
