import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TMcOrganization } from './types';

const [, getNewerDate] = createRelatedDates();

const generator = Generator<TMcOrganization>({
  fields: {
    id: fake((f) => f.string.uuid()),
    name: fake((f) => f.company.name()),
    createdAt: fake(getNewerDate),
  },
});

export default generator;
