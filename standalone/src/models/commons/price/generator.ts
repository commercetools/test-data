import { fake, Generator } from '@/core';
import { createRelatedDates } from '@/utils';
import * as CentPrecisionMoney from '../cent-precision-money';
// @TODO: should fallback to the SDK import type once recurrencePolicy is available in the SDK
import type { TPrice } from './types';
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
    recurrencePolicy: null,
  },
});

export default generator;
