import { Transformer } from '../../../core';
import {
  TCustomerGroupLimitsProjection,
  TCustomerGroupLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomerGroupLimitsProjection,
    TCustomerGroupLimitsProjection
  >('default', {
    buildFields: ['total'],
  }),
  rest: Transformer<
    TCustomerGroupLimitsProjection,
    TCustomerGroupLimitsProjection
  >('rest', {
    buildFields: ['total'],
  }),
  graphql: Transformer<
    TCustomerGroupLimitsProjection,
    TCustomerGroupLimitsProjectionGraphql
  >('graphql', {
    buildFields: ['total'],
    addFields: () => ({
      __typename: 'CustomerGroupLimitsProjection',
    }),
  }),
};

export default transformers;
