import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import { TOrderFromCartDraft } from '../types';
import { Reference } from '@commercetools-test-data/commons';

// https://docs.commercetools.com/api/projects/orders#orderfromcartdraft

const generator = Generator<TOrderFromCartDraft>({
  fields: {
    cart: fake(() => Reference.random().typeId('cart')),
    version: sequence(),
    orderNumber: fake((f) => String(f.datatype.number({ min: 100000 }))),
  },
});

export default generator;
