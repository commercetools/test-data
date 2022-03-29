import { sequence, fake, Generator } from '@commercetools-test-data/core';
import {
  LocalizedString,
  Address,
  Initiator,
} from '@commercetools-test-data/commons';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { roles } from './constants';
import type { TChannel } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/channels#channel
const generator = Generator<TChannel>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    key: fake((f) => f.lorem.slug(2)),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    createdBy: fake(() => Initiator.random()),
    lastModifiedBy: fake(() => Initiator.random()),
    roles: [roles.Primary],
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    address: fake(() => Address.random()),
    reviewRatingStatistics: null,
    custom: null,
    geoLocation: null,
  },
});

export default generator;
