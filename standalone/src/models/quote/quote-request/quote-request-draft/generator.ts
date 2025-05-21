import { fake, Generator, sequence } from '@/core';
import { Reference } from '@/models/commons';
import { TQuoteRequestDraft } from '../types';

// https://docs.commercetools.com/api/projects/quote-requests#quoterequestdraft

const generator = Generator<TQuoteRequestDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    cart: fake(() => Reference.random().typeId('cart')),
    cartVersion: sequence(),
    comment: null,
    state: null,
    purchaseOrderNumber: null,
    custom: null,
  },
});

export default generator;
