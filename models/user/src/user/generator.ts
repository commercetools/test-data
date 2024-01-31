import { sequence, fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TUser } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TUser>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    email: fake((f) => f.internet.email()),
    lowercaseEmail: fake((f) => f.internet.email()),
    firstName: fake((f) => f.person.firstName()),
    lastName: fake((f) => f.person.lastName()),
    password: fake((f) => f.internet.password()),
    language: fake(() => ['en']),
    numberFormat: fake(() => ['en']),
    businessRole: fake(() => 'Other'),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    lastLoginAt: fake(getNewerDate),
  },
});

export default generator;
