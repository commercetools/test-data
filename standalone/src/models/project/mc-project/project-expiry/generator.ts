import { fake, Generator } from '@/core';
import { TProjectExpiry } from './types';

const generator = Generator<TProjectExpiry>({
  fields: {
    isActive: fake(() => false),
    daysLeft: null,
  },
});

export default generator;
