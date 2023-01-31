import { fake, Generator } from '@commercetools-test-data/core';
import { TPlainEnumValue } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributeplainenumvalue

const generator = Generator<TPlainEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(4)),
    label: fake((f) => f.lorem.slug(4)),
  },
});

export default generator;
