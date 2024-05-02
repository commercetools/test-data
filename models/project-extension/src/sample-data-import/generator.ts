import { fake, Generator } from '@commercetools-test-data/core';

import type { TSampleDataImportMetadata } from './types';

const generator = Generator<TSampleDataImportMetadata>({
  fields: {
    completed: fake((f) => f.datatype.boolean()),
    dataset: fake((f) => f.helpers.arrayElement(['FASHION', 'GOODSTORE'])),
  },
});

export default generator;
