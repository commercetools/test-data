import { fake, Generator } from '../../../core';
import { Reference } from '../../commons';
import * as AssociateRoleAssignment from '../associate-role-assignment';
import { TAssociateDefault } from './types';

// https://docs.commercetools.com/api/projects/business-units#associate

const generator = Generator<TAssociateDefault>({
  fields: {
    associateRoleAssignments: fake(() => [AssociateRoleAssignment.random()]),
    customer: fake(() => Reference.presets.customerReference()),
  },
});

export default generator;
