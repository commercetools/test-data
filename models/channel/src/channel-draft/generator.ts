import {
  LocalizedStringDraft,
  Address,
} from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { roles } from '../constants';
import { TChannelDraft } from '../types';

// https://docs.commercetools.com/api/projects/channels#channeldraft
const generator = Generator<TChannelDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    roles: [roles.Primary],
    name: fake(() => LocalizedStringDraft.random()),
    description: fake(() => LocalizedStringDraft.random()),
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
