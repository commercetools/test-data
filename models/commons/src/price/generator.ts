import type { Price } from '@commercetools/platform-sdk';
import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/types#price
const generator = Generator<Price>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    key: null,
    value: fake(() => CentPrecisionMoney.random()),
    country: fake((f) => f.address.countryCode()),
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
