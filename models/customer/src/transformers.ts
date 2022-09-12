import { Transformer } from '@commercetools-test-data/core';
import type { TCustomer, TCustomerGraphql } from './types';

const transformers = {
  default: Transformer<TCustomer, TCustomer>('default', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TCustomer, TCustomer>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TCustomer, TCustomerGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => ({
      __typename: 'Customer',
    }),
  }),
};

export default transformers;
