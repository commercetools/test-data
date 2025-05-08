import { sequence, fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';
import { fakeBusinessRoles } from '../constants';
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
    language: fake(() => ['en']),
    numberFormat: fake(() => ['en']),
    businessRole: fake((f) => f.helpers.arrayElement(fakeBusinessRoles)),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    lastLoginAt: fake(getNewerDate),
    locked: fake(() => false),
  },
});

export default generator;
