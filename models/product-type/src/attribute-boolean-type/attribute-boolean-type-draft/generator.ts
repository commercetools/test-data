import { Generator } from '@commercetools-test-data/core';
import type { TAttributeBooleanTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributebooleantype

export const generator = Generator<TAttributeBooleanTypeDraft>({
  fields: {
    name: 'boolean',
  },
});
