import { Channel } from '@commercetools-test-data/channel';
import {
  ClientLogging,
  PriceTier,
  CentPrecisionMoney,
  Reference,
} from '@commercetools-test-data/commons';
import { Generator, fake, sequence } from '@commercetools-test-data/core';
import { CustomerGroup } from '@commercetools-test-data/customer-group';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TStandalonePrice } from './types';

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
    customerGroup: fake(() =>
      Reference.presets.customerGroupReference().obj(CustomerGroup.random())
    ),
    channel: fake(() =>
      Reference.presets.channelReference().obj(Channel.random())
    ),
    validFrom: fake(getCreatedAt),
    validUntil: fake(getExpiresAt),
    tiers: [fake(() => PriceTier.random())],
    discounted: null,
    staged: null,
    custom: null,
    active: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
