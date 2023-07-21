import { LocalizedString, Address } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
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
    custom: null,
    geoLocation: {
      type: 'Point',
      coordinates: [
        fake((f) => f.location.longitude()),
        fake((f) => f.location.latitude()),
      ],
    },
  },
});

export default generator;
