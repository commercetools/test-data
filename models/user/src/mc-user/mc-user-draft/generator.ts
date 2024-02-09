import { fake, Generator } from '@commercetools-test-data/core';
import type { TMcUserDraft } from '../types';

const generator = Generator<TMcUserDraft>({
  fields: {
    email: fake((f) => f.internet.email()),
    firstName: fake((f) => f.person.firstName()),
    lastName: fake((f) => f.person.lastName()),
  },
});

export default generator;
