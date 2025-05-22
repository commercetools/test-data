import type { Price } from '@commercetools/platform-sdk';
import { fake, Generator } from '@/core';
import { createRelatedDates } from '@/utils';
import * as CentPrecisionMoney from '../cent-precision-money';
import { TPrice } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/types#price
const generator = Generator<TPrice>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: null,
    value: fake(() => CentPrecisionMoney.random()),
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
