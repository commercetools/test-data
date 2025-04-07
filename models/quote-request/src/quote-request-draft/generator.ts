import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator, sequence } from '@commercetools-test-data/core';
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
