import { Generator } from '@commercetools-test-data/core';
import type { TAttributeDateType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetype

export const generator = Generator<TAttributeDateType>({
  fields: {
    name: 'date',
  },
});
