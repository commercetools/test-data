import { fake, Generator } from '@commercetools-test-data/core';
import { TLimit } from './types';

/**
 * limit - Number
 */
const generator = Generator<TLimit>({
  fields: {
    limit: fake((f) => f.number.int(10)),
  },
});

export default generator;