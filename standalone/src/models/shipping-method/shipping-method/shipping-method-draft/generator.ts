import { Generator, fake } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
import type { TShippingMethodDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingmethoddraft

const generator = Generator<TShippingMethodDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    localizedName: fake(() => LocalizedStringDraft.random()),
    localizedDescription: fake(() => LocalizedStringDraft.random()),
    taxCategory: null,
    zoneRates: null,
    isDefault: fake((f) => f.datatype.boolean()),
    predicate: null,
    custom: null,
  },
});

export default generator;
