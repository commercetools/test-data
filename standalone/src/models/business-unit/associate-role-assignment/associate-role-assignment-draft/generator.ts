import { fake, Generator, oneOf } from '@/core';
import { ReferenceDraft } from '@/models/commons';
import { associateRoleInheritanceMode } from '../constants';
import { TAssociateRoleAssignmentDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#associateroleassignmentdraft

const generator = Generator<TAssociateRoleAssignmentDraft>({
  fields: {
    associateRole: fake(() => ReferenceDraft.presets.associateRoleReference()),
    inheritance: oneOf(...Object.values(associateRoleInheritanceMode)),
  },
});

export default generator;
