import { Generator } from '@commercetools-test-data/core';
import { TCart } from './types';

// https://docs.commercetools.com/api/projects/carts#cart

const generator = Generator<TCart>({
  fields: {},
});

export default generator;
