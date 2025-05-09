import { fake, Generator } from '../../../core';
import {
  LocalizedStringDraft,
  Reference,
} from '../../commons';
import { TShoppingListDraft } from '../types';

// https://docs.commercetools.com/api/projects/shoppingLists#shoppinglistdraft

const generator = Generator<TShoppingListDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedStringDraft.random()),
    slug: fake(() => LocalizedStringDraft.presets.ofSlugs()),
    customer: fake(() => Reference.random().typeId('customer')),
    description: fake(() => LocalizedStringDraft.random()),
    anonymousId: fake((f) => f.string.uuid()),
    deleteDaysAfterLastModification: null,
    lineItems: [],
    textLineItems: [],
    store: null,
    custom: null,
  },
});

export default generator;
