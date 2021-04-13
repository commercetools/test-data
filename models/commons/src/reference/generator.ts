import type { TReference } from './types';

import { Generator, fake } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/types#referencetype
const generator = Generator<TReference>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    typeId: null,
  },
});

export default generator;
