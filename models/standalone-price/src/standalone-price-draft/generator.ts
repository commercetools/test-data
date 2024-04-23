import {
  PriceTierDraft,
  KeyReferenceDraft,
  MoneyDraft,
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
    value: fake(() => MoneyDraft.random()),
    country: fake((f) => f.location.countryCode()),
    customerGroup: fake(() => KeyReferenceDraft.presets.customerGroup()),
    channel: fake(() => KeyReferenceDraft.presets.channel()),
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    tiers: fake((f) => {
      return f.helpers.multiple(PriceTierDraft.random, {
        count: { min: 1, max: 3 },
      });
    }),
    discounted: null,
    staged: null,
    active: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
