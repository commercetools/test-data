import { AssociateRole } from '@commercetools-test-data/associate-role';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { associateRoleInheritanceMode } from './constants';
import type { TAssociateRoleAssignmentDefault } from './types';

// https://docs.commercetools.com/api/projects/business-units#associateroleassignment

const generator = Generator<TAssociateRoleAssignmentDefault>({
  fields: {
    associateRole: fake(() => AssociateRole.random()),
    inheritance: oneOf(...Object.values(associateRoleInheritanceMode)),
  },
});

export default generator;
