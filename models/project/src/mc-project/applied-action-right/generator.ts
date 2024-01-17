import { fake, Generator } from '@commercetools-test-data/core';
import { TAppliedActionRight } from './types';

const generator = Generator<TAppliedActionRight>({
  fields: {
    // TODO: use more realistic values for action rights
    group: fake((f) => f.animal.type()),
    name: fake((f) => f.animal.type()),
    value: fake(() => true),
  },
});

export default generator;
