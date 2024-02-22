import { fake, Generator } from '@commercetools-test-data/core';
import { fakeBusinessRoles } from '../../constants';
import type { TUserDraft } from '../types';

const generator = Generator<TUserDraft>({
  fields: {
    email: fake((f) => f.internet.email()),
    password: fake((f) => f.internet.password()),
    firstName: fake((f) => f.person.firstName()),
    lastName: fake((f) => f.person.lastName()),
    language: fake(() => ['en']),
    numberFormat: fake(() => ['en']),
    businessRole: fake((f) => f.helpers.arrayElement(fakeBusinessRoles)),
  },
});

export default generator;
