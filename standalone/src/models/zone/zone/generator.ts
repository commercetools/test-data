import { sequence, fake, Generator } from '@/core';
import { ClientLogging } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TZone } from './types';

//https://docs.commercetools.com/api/projects/zones#zone

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TZone>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    description: fake((f) => f.lorem.sentence()),
    locations: fake((f) => [{ country: f.location.countryCode() }]),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
