import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TInventoryEntry } from './types';

const [getOlderDate, getNewerDate, getFutureDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/inventory#inventoryentry

const generator = Generator<TInventoryEntry>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: fake((f) => f.lorem.slug(2)),
    version: fake((f) => f.number.int()),
    createdAt: fake(getOlderDate),
    createdBy: null,
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: null,
    sku: fake((f) => f.lorem.words()),
    supplyChannel: fake(() => Reference.presets.channelReference()),
    quantityOnStock: fake((f) => f.number.int()),
    availableQuantity: fake((f) => f.number.int()),
    restockableInDays: fake((f) => f.number.int()),
    expectedDelivery: fake(getFutureDate),
    custom: null,
  },
});

export default generator;
