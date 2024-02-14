import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import * as AssociateRoleAssignment from '../associate-role-assignment';
import { TAssociateDefault } from './types';

// https://docs.commercetools.com/api/projects/business-units#associate

const generator = Generator<TAssociateDefault>({
  fields: {
    associateRoleAssignments: fake(() => [AssociateRoleAssignment.random()]),
    customer: fake(() =>
      Reference.presets.customerReference.customerReference()
    ),
  },
});

export default generator;
