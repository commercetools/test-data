import { fake, Generator } from '@/core';
import { TAttributePlainEnumValue } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributeplainenumvalue

const generator = Generator<TAttributePlainEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(4)),
    label: fake((f) => f.lorem.slug(4)),
  },
});

export default generator;
