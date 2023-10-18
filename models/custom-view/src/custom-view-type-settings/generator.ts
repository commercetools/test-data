import { fake, Generator } from '@commercetools-test-data/core';
import type { TCustomViewTypeSettings } from './types';

const generator = Generator<TCustomViewTypeSettings>({
  fields: {
    // Assumes that the type is `CustomPanel`.
    size: fake((f) => f.helpers.arrayElement(['SMALL', 'LARGE'])),
  },
});

export default generator;
