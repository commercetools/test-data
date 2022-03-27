import { fake, Generator } from '@commercetools-test-data/core';
import { LocalizedString, Address } from '@commercetools-test-data/commons';
import { roles } from '../constants';
import { TChannelDraft } from '../types';

// https://docs.commercetools.com/api/projects/channels#channeldraft
const generator = Generator<TChannelDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
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
