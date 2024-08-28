import { Generator } from '@commercetools-test-data/core';
import type { TAttributeNumberTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributenumbertype

export const generator = Generator<TAttributeNumberTypeDraft>({
  fields: {
    name: 'number',
  },
});
