import { Generator } from '@/core';
import { TAttributeDateType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetype

export const generator = Generator<TAttributeDateType>({
  fields: {
    name: 'date',
  },
});
