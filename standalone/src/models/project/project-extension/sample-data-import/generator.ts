import { fake, Generator } from '@/core';

import type { TSampleDataImportMetadata } from './types';

const generator = Generator<TSampleDataImportMetadata>({
  fields: {
    completed: fake((f) => f.datatype.boolean()),
    dataset: fake((f) =>
      f.helpers.arrayElement(['FASHION', 'GOODSTORE', 'B2B'])
    ),
  },
});

export default generator;
