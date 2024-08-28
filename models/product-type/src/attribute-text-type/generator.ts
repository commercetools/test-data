import { Generator } from '@commercetools-test-data/core';
import type { TAttributeTextType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributetexttype

export const generator = Generator<TAttributeTextType>({
  fields: {
    name: 'text',
  },
});
