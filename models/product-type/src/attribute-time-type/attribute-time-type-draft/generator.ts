import { Generator } from '@commercetools-test-data/core';
import type { TAttributeTimeTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributetimetype

export const generator = Generator<TAttributeTimeTypeDraft>({
  fields: {
    name: 'time',
  },
});
