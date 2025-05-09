import { fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';
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
