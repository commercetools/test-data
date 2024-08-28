import { Generator } from '@commercetools-test-data/core';
import type { TAttributeTextTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributeenumtype

export const generator = Generator<TAttributeTextTypeDraft>({
  fields: {
    name: 'text',
  },
});
