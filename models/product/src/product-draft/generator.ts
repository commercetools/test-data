import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TProductDraft } from './types';

// https://docs.commercetools.com/api/types#money

const generator = Generator<TProductDraft>({
  fields: {},
});

export default generator;
