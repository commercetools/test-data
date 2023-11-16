import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TShoppingListDraft } from '../types';

// https://docs.commercetools.com/api/projects/shoppingLists#shoppinglistdraft

const generator = Generator<TShoppingListDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    customer: fake(() => Reference.random().typeId('customer')),
    description: fake(() => LocalizedString.random()),
    anonymousId: fake((f) => f.string.uuid()),
    deleteDaysAfterLastModification: null,
    lineItems: [],
    textLineItems: [],
    store: null,
    custom: null,
  },
});

export default generator;
