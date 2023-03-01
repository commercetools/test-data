import { Generator, fake } from '@commercetools-test-data/core';
import type { TReference } from './types';

// https://docs.commercetools.com/api/types#referencetype
const generator = Generator<TReference>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    typeId: null,
    key: null,
  },
});

export default generator;
