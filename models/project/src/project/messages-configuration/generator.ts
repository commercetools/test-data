import { fake, Generator } from '@commercetools-test-data/core';
import { TMessagesConfiguration } from './types';

const generator = Generator<TMessagesConfiguration>({
  fields: {
    enabled: fake((f) => false),
    deleteDaysAfterCreation: null,
  },
});

export default generator;
