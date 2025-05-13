import { sequence, fake, Generator } from '@/core';
import { ClientLogging, LocalizedString, Reference } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TShoppingList } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/shoppingLists#shoppingLists

const generator = Generator<TShoppingList>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    customer: fake(() => Reference.random().typeId('customer')),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    description: fake(() => LocalizedString.random()),
    lineItems: [],
    textLineItems: [],
    deleteDaysAfterLastModification: null,
    anonymousId: fake((f) => f.string.uuid()),
    store: null,
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
