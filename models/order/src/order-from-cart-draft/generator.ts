import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TOrderFromCartDraft } from '../types';

// https://docs.commercetools.com/api/projects/orders#orderfromcartdraft

const generator = Generator<TOrderFromCartDraft>({
  fields: {},
});

export default generator;
