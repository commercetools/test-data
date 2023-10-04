import { LocalizedString, Money } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCustomLineItem } from './types';

// https://docs.commercetools.com/api/projects/carts#cart

const generator = Generator<TCustomLineItem>({
  fields: {
    id: fake((f) => f.string.uuid()),
    name: fake(() => LocalizedString.random()),
    money: fake(() => [Money.random()]),
    taxedPrice: null,
    taxedPricePortions: [],
    totalPrice: null,
    slug: fake((f) => f.lorem.slug(3)),
    quantity: fake((f) => f.number.int(9)),
    state: [],
    taxCategory: null,
    taxRate: null,
    perMethodTaxRate: [],
    discountedPricePerQuantity: [],
    shippingDetails: null,
    priceMode: oneOf('Standard', 'External'),
    custom: null,
  },
});

export default generator;
