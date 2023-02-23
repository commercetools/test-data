import { Generator } from '@commercetools-test-data/core';
import { TProductVariant } from './types';

// https://docs.commercetools.com/api/projects/products#productvariant

const generator = Generator<TProductVariant>({
  fields: {},
});

export default generator;
