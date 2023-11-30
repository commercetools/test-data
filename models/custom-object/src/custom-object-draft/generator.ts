import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { TCustomObjectDraft } from '../types';

const valueKey = fake((f) => f.string.alpha(5)) as unknown as string;

const generator = Generator<TCustomObjectDraft>({
  fields: {
    version: sequence(),
    key: fake((f) => f.string.alphanumeric(10)),
    container: fake((f) => f.string.alphanumeric(10)),
    value: {
      [valueKey]: {
        [valueKey]: fake((f) => f.string.alpha(7)),
      },
    },
  },
});

export default generator;
