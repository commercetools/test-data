import type { Channel } from '@commercetools/platform-sdk';
import { Address, ClientLogging } from '@commercetools-test-data/commons';
import { sequence, fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { roles } from './constants';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/channels#channel
const generator = Generator<Channel>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    key: fake((f) => f.lorem.slug(2)),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedBy: fake(() => ClientLogging.random()),
    roles: [roles.Primary],
    name: null,
    description: null,
    address: fake(() => Address.random()),
    reviewRatingStatistics: null,
    custom: null,
    geoLocation: null,
  },
});

export default generator;
