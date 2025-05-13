import { Generator, fake } from '@/core';
import { LocalizedStringDraft, Reference } from '@/models/commons';
import type { TShippingMethodDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingmethoddraft

const generator = Generator<TShippingMethodDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    localizedName: fake((f) => LocalizedStringDraft.random()),
    localizedDescription: fake(() => LocalizedStringDraft.random()),
    taxCategory: fake(() => Reference.random().typeId('tax-category')),
    zoneRates: [],
    isDefault: fake((f) => f.datatype.boolean()),
    predicate: '1=1',
    custom: null,
  },
});

export default generator;
