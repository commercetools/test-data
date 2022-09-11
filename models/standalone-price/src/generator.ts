import { ClientLogging } from '@commercetools-test-data/commons';
import { sequence, fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TStandalonePrice } from './types';

const [getOlderDate, getFutureDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/standalone-prices#standaloneprice
const generator = Generator<TStandalonePrice>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    key: fake((f) => f.lorem.slug(2)),
    version: sequence(),
    sku: fake((f) => f.lorem.words()),
    value: null,
    country: fake((f) => f.address.countryCode()),
    customerGroup: null,
    channel: null,
    validFrom: fake(getOlderDate),
    validUntil: fake(getFutureDate),
    tiers: null,
    discounted: null,
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
