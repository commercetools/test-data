import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { Generator, fake } from '@commercetools-test-data/core';
import type { TShippingMethodDraft } from '../types';

// https://docs.commercetools.com/api/projects/taxCategories#taxcategorydraft

const generator = Generator<TShippingMethodDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    localizedName: fake((f) => LocalizedString.random()),
    localizedDescription: fake(() => LocalizedString.random()),
    taxCategory: fake(() => Reference.random().typeId('tax-category')),
    zoneRates: [],
    isDefault: fake((f) => f.datatype.boolean()),
    predicate: '1=1',
    custom: null,
  },
});

export default generator;
