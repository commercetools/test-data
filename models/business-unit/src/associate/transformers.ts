import {
  type TReferenceGraphql,
  Reference,
} from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';
import { Customer, TCustomerGraphql } from '@commercetools-test-data/customer';
import type {
  TAssociateDefault,
  TAssociateRest,
  TAssociateGraphql,
} from './types';

const transformers = {
  default: Transformer<TAssociateDefault, TAssociateDefault>('default', {
    buildFields: ['associateRoleAssignments', 'customer'],
  }),
  rest: Transformer<TAssociateDefault, TAssociateRest>('rest', {
    buildFields: ['associateRoleAssignments', 'customer'],
  }),
  graphql: Transformer<TAssociateDefault, TAssociateGraphql>('graphql', {
    buildFields: ['associateRoleAssignments'],
    replaceFields: ({ fields }) => {
      const restCustomerRef = buildField(fields.customer, 'rest');

      const customerRef = Reference.presets
        .customerReference()
        .id(restCustomerRef.id)
        .buildGraphql<TReferenceGraphql>();

      const customer = Customer.random()
        .id(restCustomerRef.id)
        .firstName(restCustomerRef.obj?.firstName)
        .lastName(restCustomerRef.obj?.lastName)
        .key(restCustomerRef.obj?.key)
        .customerNumber(restCustomerRef.obj?.customerNumber)
        .externalId(restCustomerRef.obj?.externalId)
        .email(restCustomerRef.obj?.email || '')
        .buildGraphql<TCustomerGraphql>();

      return {
        ...fields,
        customer,
        customerRef,
        __typename: 'Associate',
      };
    },
  }),
};

export default transformers;
