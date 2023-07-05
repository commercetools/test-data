import { Money, Reference } from '@commercetools-test-data/commons';
import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { inventoryMode } from '../constants';
import { TLineItemDraft } from '../types';

// https://docs.commercetools.com/api/projects/carts#lineitemdraft

const [addedAt] = createRelatedDates();

const generator = Generator<TLineItemDraft>({
  fields: {
    productId: fake((f) => f.string.uuid()),
    sku: fake((f) => `${f.lorem.word()}-${f.string.alphaNumeric(3)}`),
    quantity: fake((f) =>
      f.datatype.number({
        min: 1,
      })
    ),
    variantId: sequence(),
    supplyChannel: fake(() => Reference.random().typeId('channel')),
    distributionChannel: fake(() => Reference.random().typeId('channel')),
    externalTaxRate: null,
    externalPrice: fake(() => Money.random()),
    externalTotalPrice: null,
    custom: null,
    inventoryMode: oneOf(...Object.values(inventoryMode)),
    shippingDetails: null,
    addedAt: fake(addedAt),
  },
});

export default generator;
