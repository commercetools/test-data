import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TStandalonePriceDraft } from '../types';

const [getOlderDate, getFutureDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/standalone-prices#standalonepricedraft
const generator = Generator<TStandalonePriceDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
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
  },
});

export default generator;
