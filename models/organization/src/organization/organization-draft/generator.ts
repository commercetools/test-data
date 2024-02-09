import { fake, Generator } from '@commercetools-test-data/core';
import type { TOrganizationDraft } from '../types';

const generator = Generator<TOrganizationDraft>({
  fields: {
    name: fake((f) => f.company.name()),
    owner: null, // TODO: Reference to User
  },
});

export default generator;
