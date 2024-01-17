import { fake, Generator } from '@commercetools-test-data/core';
import { TAppliedPermission } from './types';

const generator = Generator<TAppliedPermission>({
  fields: {
    // TODO: use more realistic values for action rights
    name: fake((f) => f.animal.type()),
    value: fake(() => true),
  },
});

export default generator;
