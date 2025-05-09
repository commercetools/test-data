import { fake, Generator, oneOf } from '../../../core';
import { AssociateRole } from '../../associate-role';
import { associateRoleInheritanceMode } from './constants';
import { TAssociateRoleAssignmentDefault } from './types';

// https://docs.commercetools.com/api/projects/business-units#associateroleassignment

const generator = Generator<TAssociateRoleAssignmentDefault>({
  fields: {
    associateRole: fake(() => AssociateRole.random()),
    inheritance: oneOf(...Object.values(associateRoleInheritanceMode)),
  },
});

export default generator;
