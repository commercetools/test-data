import { Generator, fake } from '@commercetools-test-data/core';
import type { TLocalizedField } from './types';

const generator = Generator<TLocalizedField>({
  fields: {
    locale: fake((f) => f.helpers.arrayElement(['en', 'de', 'fr', 'es'])),
    value: fake((f) =>
      f.lorem.words({
        min: 1,
        max: 4,
      })
    ),
  },
});

export default generator;
