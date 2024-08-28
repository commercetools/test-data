import { Generator } from '@commercetools-test-data/core';
import type { TAttributeTimeType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributetimetype

export const generator = Generator<TAttributeTimeType>({
  fields: {
    name: 'time',
  },
});
