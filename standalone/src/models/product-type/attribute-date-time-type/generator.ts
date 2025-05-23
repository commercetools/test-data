import { Generator } from '@/core';
import { TAttributeDateTimeType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetimetype

export const generator = Generator<TAttributeDateTimeType>({
  fields: {
    name: 'datetime',
  },
});
