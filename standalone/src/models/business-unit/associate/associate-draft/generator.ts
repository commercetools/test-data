import { fake, Generator } from '@/core';
import { ReferenceDraft } from '@/models/commons';
import { AssociateRoleAssignmentDraft } from '../../associate-role-assignment/';
import { TAssociateDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#associatedraft

const generator = Generator<TAssociateDraft>({
  fields: {
    associateRoleAssignments: fake(() => [
      AssociateRoleAssignmentDraft.random(),
    ]),
    customer: fake(() => ReferenceDraft.presets.customerReference()),
  },
});

export default generator;
