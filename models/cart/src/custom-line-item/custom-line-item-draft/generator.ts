import {
  LocalizedStringDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import type { TCustomLineItemDraft } from '../types';

// https://docs.commercetools.com/api/projects/carts#cartdraft

const generator = Generator<TCustomLineItemDraft>({
  fields: {
    name: fake(() => LocalizedStringDraft.random()),
    quantity: fake((f) => f.number.int(9)),
    money: fake(() => MoneyDraft.random()),
    slug: fake((f) => f.lorem.slug(3)),
    taxCategory: null,
    externalTaxRate: null,
    shippingDetails: null,
    priceMode: oneOf('Standard', 'External'),
    custom: null,
  },
});

export default generator;
