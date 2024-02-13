import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { AssociateRoleAssignmentDraft } from '../../associate-role-assignment/';
import { TAssociateDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#associatedraft

const generator = Generator<TAssociateDraft>({
  fields: {
    associateRoleAssignments: [
      fake(() => AssociateRoleAssignmentDraft.random()),
    ],
    customer: fake(() => Reference.random().typeId('customer')), // should use ReferenceDraft
  },
});

export default generator;
