import { fake, Generator } from '@commercetools-test-data/core';
import { TLimitWithCurrent } from './types';

const generator = Generator<TLimitWithCurrent>({
  fields: {
    limit: fake((f) => f.number.int(10)),
    current: fake((f) => f.number.int(7)),
  },
});

export default generator;
