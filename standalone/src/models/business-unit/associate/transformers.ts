import { Transformer } from '@/core';
import {
  type TReference,
  type TReferenceGraphql,
  Reference,
} from '@/models/commons';
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
    replaceFields: ({ fields }) => {
      const customer: TReference<'customer'> = Reference.presets
        .customerReference()
        .id(fields.customer.id)
        .build();
      return {
        ...fields,
        customer,
      };
    },
  }),
  graphql: Transformer<TAssociateDefault, TAssociateGraphql>('graphql', {
    buildFields: ['associateRoleAssignments', 'customer'],
    replaceFields: ({ fields }) => {
      const customerRef: TReferenceGraphql = Reference.presets
        .customerReference()
        .id(fields.customer.id)
        .buildGraphql();
      return {
        ...fields,
        customerRef,
        __typename: 'Associate',
      };
    },
  }),
};

export default transformers;
