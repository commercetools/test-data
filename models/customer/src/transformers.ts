import { Transformer } from '@commercetools-test-data/core';
import type { TCustomer, TCustomerGraphql } from './types';

const commonBuildFields: (keyof TCustomer)[] = [
  'createdBy',
  'lastModifiedBy',
  'stores',
  'addresses',
];

const transformers = {
  default: Transformer<TCustomer, TCustomer>('default', {
    buildFields: commonBuildFields,
  }),
  rest: Transformer<TCustomer, TCustomer>('rest', {
    buildFields: commonBuildFields,
    removeFields: [
      'defaultShippingAddress',
      'shippingAddresses',
      'defaultBillingAddress',
      'billingAddresses',
    ],
  }),
  graphql: Transformer<TCustomer, TCustomerGraphql>('graphql', {
    buildFields: [
      ...commonBuildFields,
      'defaultShippingAddress',
      'shippingAddresses',
      'defaultBillingAddress',
      'billingAddresses',
    ],
    addFields: () => ({
      __typename: 'Customer',
    }),
  }),
};

export default transformers;
