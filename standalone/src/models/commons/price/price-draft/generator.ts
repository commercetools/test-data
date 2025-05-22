import { fake, Generator } from '@/core';
import { createRelatedDates } from '@/utils';
import { MoneyDraft } from '../../index';
import { TPriceDraft } from '../types';

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
    recurrencePolicyRef: null,
  },
});

export default generator;
