import { fake, Generator } from '@/core';
import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TStandalonePriceDraft } from '../types';

// https://docs.commercetools.com/api/projects/standalone-prices#standalonepricedraft

const [getValidFrom, getValidUntil] = createRelatedDates();

const generator = Generator<TStandalonePriceDraft>({
  fields: {
    key: fake((f) => f.string.alphanumeric(10)),
    sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
    value: fake(() => MoneyDraft.random()),
    country: fake((f) => f.location.countryCode()),
    customerGroup: fake(() => KeyReferenceDraft.presets.customerGroup()),
    channel: fake(() => KeyReferenceDraft.presets.channel()),
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    tiers: null,
    discounted: null,
    staged: null,
    active: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
