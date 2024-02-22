import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TMcIdTokenUserInfo } from '../types';

const [_, getNewerDate] = createRelatedDates();

const generator = Generator<TMcIdTokenUserInfo>({
  fields: {
    iss: fake((f) => f.internet.url()),
    sub: fake((f) => f.string.uuid()),
    aud: fake((f) => f.internet.url()),
    exp: fake(getNewerDate),
    iat: fake(getNewerDate),
    email: fake((f) => f.internet.email()),
    name: fake((f) => f.person.firstName()),
    additionalClaims: null,
  },
});

export default generator;
