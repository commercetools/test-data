import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { MoneyDraft } from '../../index';
import type { TPriceDraft } from '../types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/types#pricedraft
const generator = Generator<TPriceDraft>({
  fields: {
    key: null,
    value: fake(() => MoneyDraft.random()),
    country: fake((f) => f.location.countryCode()),
    customerGroup: null,
    channel: null,
    validFrom: fake(getOlderDate),
    validUntil: fake(getNewerDate),
    tiers: null,
    discounted: null,
    custom: null,
  },
});

export default generator;
