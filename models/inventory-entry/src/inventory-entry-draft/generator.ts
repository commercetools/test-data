import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TInventoryEntryDraft } from '../types';

const [getFutureDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/inventory#inventoryentrydraft

const generator = Generator<TInventoryEntryDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    sku: fake((f) => f.lorem.words()),
    quantityOnStock: fake((f) => f.number.int({ min: 11, max: 30 })),
    restockableInDays: fake((f) => f.number.int({ min: 1, max: 10 })),
    expectedDelivery: fake(getFutureDate),
    supplyChannel: fake(() => Reference.random().typeId('channel')),
    custom: null,
  },
});

export default generator;
