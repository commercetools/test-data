import {
  PriceTierDraft,
  KeyReference,
  CentPrecisionMoneyDraft,
} from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TStandalonePriceDraft } from '../types';

// https://docs.commercetools.com/api/projects/standalone-prices#standalonepricedraft

const [getValidFrom, getValidUntil] = createRelatedDates();

const generator = Generator<TStandalonePriceDraft>({
  fields: {
    key: fake((f) => f.string.alphanumeric(10)),
    sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
    value: fake(() => CentPrecisionMoneyDraft.random()),
    country: fake((f) => f.location.countryCode()),
    customerGroup: fake(() => KeyReference.presets.customerGroup()),
    channel: fake(() => KeyReference.presets.channel()),
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    tiers: [fake(() => PriceTierDraft.random())],
    discounted: null,
    staged: null,
    active: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
