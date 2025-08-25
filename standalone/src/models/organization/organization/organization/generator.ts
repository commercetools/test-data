import { fake, Generator, sequence } from '@/core';
import { createRelatedDates } from '@/utils';
import { Team } from '../team';
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
