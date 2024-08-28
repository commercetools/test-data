import { Generator } from '@commercetools-test-data/core';
import type { TAttributeNumberType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributenumbertype

export const generator = Generator<TAttributeNumberType>({
  fields: {
    name: 'number',
  },
});
