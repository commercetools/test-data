import { Transformer } from '@/core';
import type { TCustomerGroup, TCustomerGroupGraphql } from './types';

const transformers = {
  default: Transformer<TCustomerGroup, TCustomerGroup>('default', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TCustomerGroup, TCustomerGroup>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TCustomerGroup, TCustomerGroupGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => ({
      __typename: 'CustomerGroup',
    }),
  }),
};

export default transformers;
