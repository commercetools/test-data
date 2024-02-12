import { ReferenceDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { associateRoleInheritanceMode } from '../constants';
import { TAssociateRoleAssignmentDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#associateroleassignmentdraft

const generator = Generator<TAssociateRoleAssignmentDraft>({
  fields: {
    associateRole: fake(() => ReferenceDraft.random().typeId('associate-role')),
    inheritance: oneOf(...Object.values(associateRoleInheritanceMode)),
  },
});

export default generator;
