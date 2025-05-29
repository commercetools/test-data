import { Generator } from '@/core';
import { TAttributeTimeTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributetimetype

export const generator = Generator<TAttributeTimeTypeDraft>({
  fields: {
    name: 'time',
  },
});
