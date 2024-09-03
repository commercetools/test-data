import { fake, Generator } from '@commercetools-test-data/core';
import type { TLocalizedEnumValue } from './types';

const generator = Generator<TLocalizedEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(4)),
    label: fake((f) => f.lorem.slug(4)),
  },
});

export default generator;
