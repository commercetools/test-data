import { Generator } from '@/core';
import { TAttributeBooleanType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributebooleantype

export const generator = Generator<TAttributeBooleanType>({
  fields: {
    name: 'boolean',
  },
});
