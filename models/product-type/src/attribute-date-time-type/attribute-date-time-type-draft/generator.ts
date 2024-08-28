import { Generator } from '@commercetools-test-data/core';
import type { TAttributeDateTimeTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetimetype

export const generator = Generator<TAttributeDateTimeTypeDraft>({
  fields: {
    name: 'datetime',
  },
});
