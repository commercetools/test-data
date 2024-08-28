import { fake, Generator } from '@commercetools-test-data/core';
import { TLimitWithCurrent } from './types';

/**
 * limit - Number
 * current - Number
 */
const generator = Generator<TLimitWithCurrent>({
  fields: {
    limit: fake((f) => f.number.int(10)),
    current: fake((f) => f.number.int(10)),
  },
});

export default generator;
