import { fake, Generator } from '@commercetools-test-data/core';
import { TProjectExpiry } from './types';

const generator = Generator<TProjectExpiry>({
  fields: {
    isActive: fake(() => false),
    daysLeft: null,
  },
});

export default generator;
