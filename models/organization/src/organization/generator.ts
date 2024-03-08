import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as Team from '../team';
import type { TOrganization } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TOrganization>({
  fields: {
    id: fake((f) => f.string.uuid()),
    name: fake((f) => f.company.name()),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    teams: fake(() => [Team.random().name('Administrators')]),
  },
});

export default generator;
