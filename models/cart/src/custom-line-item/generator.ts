import { Money } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCustomLineItem } from './types';

// https://docs.commercetools.com/api/projects/carts#cart

const generator = Generator<TCustomLineItem>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    name: fake((f) => f.lorem.words(3)),
    money: fake(() => [Money.random()]),
    taxedPrice: null,
    totalPrice: null,
    slug: fake((f) => f.lorem.slug(3)),
    quantity: fake((f) => f.datatype.number(9)),
    state: [],
    taxCategory: null,
    taxRate: null,
    discountedPricePerQuantity: [],
    shippingDetails: null,
    priceMode: oneOf('Standard', 'External'),
    custom: null,
  },
});

export default generator;
