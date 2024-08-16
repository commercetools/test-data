import { Transformer } from '@commercetools-test-data/core';
import type { TCustomer, TCustomerGraphql } from './types';

const commonBuildFields: (keyof TCustomer)[] = [
  'createdBy',
  'lastModifiedBy',
  'stores',
  'addresses',
];

const removeFields: (keyof TCustomer)[] = [
  'defaultShippingAddress',
  'shippingAddresses',
  'defaultBillingAddress',
  'billingAddresses',
];

const transformers = {
  default: Transformer<TCustomer, TCustomer>('default', {
    buildFields: commonBuildFields,
  }),
  rest: Transformer<TCustomer, TCustomer>('rest', {
    buildFields: commonBuildFields,
    removeFields: removeFields,
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
