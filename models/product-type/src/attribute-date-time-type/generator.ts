import { Generator } from '@commercetools-test-data/core';
import type { TAttributeDateTimeType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetimetype

export const generator = Generator<TAttributeDateTimeType>({
  fields: {
    name: 'datetime',
  },
});
