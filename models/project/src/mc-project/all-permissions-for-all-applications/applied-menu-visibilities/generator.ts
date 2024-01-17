import { fake, Generator } from '@commercetools-test-data/core';
import { TAppliedMenuVisibilities } from './types';

const generator = Generator<TAppliedMenuVisibilities>({
  fields: {
    // TODO: use more realistic values for action rights
    name: fake((f) => f.animal.type()),
    value: fake(() => true),
  },
});

export default generator;
