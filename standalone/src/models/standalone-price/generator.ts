import { Generator, fake, sequence } from '@/core';
import { Channel } from '@/models/channel';
import { ClientLogging, PriceTier, CentPrecisionMoney } from '@/models/commons';
import { CustomerGroup } from '@/models/customer/customer-group';
import { createRelatedDates } from '@/utils';
import { TStandalonePrice } from './types';

// https://docs.commercetools.com/api/projects/standalone-prices#standaloneprice

const [getCreatedAt, getLastModifiedAt, getExpiresAt] = createRelatedDates();

const generator = Generator<TStandalonePrice>({
  fields: {
    id: fake((f) => f.string.alphanumeric(10)),
    version: sequence(),
    createdAt: fake(getCreatedAt),
    lastModifiedAt: fake(getLastModifiedAt),
    lastModifiedBy: fake(() => ClientLogging.random()),
    createdBy: fake(() => ClientLogging.random()),
    key: fake((f) => f.string.alphanumeric(10)),
    sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
    value: fake(() => CentPrecisionMoney.random()),
    country: fake((f) => f.location.countryCode()),
    customerGroup: fake(() => CustomerGroup.random()),
    channel: fake(() => Channel.random()),
    validFrom: fake(getCreatedAt),
    validUntil: fake(getExpiresAt),
    tiers: [
      fake((f) =>
        PriceTier.random().minimumQuantity(
          f.number.int({ min: 1, max: 2000000000 })
        )
      ),
    ],
    discounted: null,
    staged: null,
    custom: null,
    active: fake((f) => f.datatype.boolean()),
    expiresAt: fake(getExpiresAt),
    recurrencePolicy: null,
  },
});

export default generator;
