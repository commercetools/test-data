import { fake, Generator } from '../../../core';
import { TCustomObjectDraft } from '../types';

const generator = Generator<TCustomObjectDraft>({
  fields: {
    version: 0,
    key: fake((f) => f.string.alphanumeric(10)),
    container: fake((f) => f.string.alphanumeric(10)),
    value: {
      valueKey: {
        nestedValueKey: fake((f) => f.string.alpha(10)),
      },
    },
  },
});

export default generator;
