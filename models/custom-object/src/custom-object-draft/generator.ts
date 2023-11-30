import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { TCustomObjectDraft } from '../types';

const generator = Generator<TCustomObjectDraft>({
  fields: {
    version: sequence(),
    key: fake((f) => f.string.alphanumeric(10)),
    container: fake((f) => f.string.alphanumeric(10)),
    value: {
      [fake((f) => f.string.alpha(5))]: {
        [fake((f) => f.string.alpha(6))]: fake((f) => f.string.alpha(7)),
      },
    },
  },
});

export default generator;
