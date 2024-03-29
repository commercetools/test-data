import { Generator, fake } from '@commercetools-test-data/core';
import type { TReference } from './types';

// https://docs.commercetools.com/api/types#referencetype
const generator = Generator<TReference>({
  fields: {
    id: fake((f) => f.string.uuid()),
    typeId: null,
  },
});

export default generator;
