import { Generator } from '@commercetools-test-data/core';
import { TOrder } from './types';

// https://docs.commercetools.com/api/projects/orders#order

const generator = Generator<TOrder>({
  fields: {},
});

export default generator;
