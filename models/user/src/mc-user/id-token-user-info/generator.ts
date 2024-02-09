import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TIdTokenUserInfo } from '../types';

const [_, getNewerDate] = createRelatedDates();

const generator = Generator<TIdTokenUserInfo>({
  fields: {
    iss: fake((f) => f.internet.url()),
    sub: fake((f) => f.internet.email()),
    aud: fake((f) => f.internet.url()),
    exp: fake(getNewerDate),
    iat: fake(getNewerDate),
    email: fake((f) => f.internet.email()),
    name: fake((f) => f.person.firstName()),
    additionalClaims: fake((f) => f.lorem.words()),
  },
});

export default generator;
