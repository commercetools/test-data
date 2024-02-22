import { fake, Generator } from '@commercetools-test-data/core';
import { fakeBusinessRoles } from '../../constants';
import type { TMcUserDraft } from '../types';

const generator = Generator<TMcUserDraft>({
  fields: {
    email: fake((f) => f.internet.email()),
    firstName: fake((f) => f.person.firstName()),
    lastName: fake((f) => f.person.lastName()),
    businessRole: fake((f) => f.helpers.arrayElement(fakeBusinessRoles)),
  },
});

export default generator;
