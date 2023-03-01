import { Generator } from '@commercetools-test-data/core';
import { TProduct } from './types';

// https://docs.commercetools.com/api/types#centprecisionmoney

const generator = Generator<TProduct>({
  fields: {},
});

export default generator;
