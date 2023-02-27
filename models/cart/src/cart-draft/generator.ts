import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCartDraft } from '../types';

// https://docs.commercetools.com/api/projects/carts#cartdraft

const generator = Generator<TCartDraft>({
  fields: {},
});

export default generator;
