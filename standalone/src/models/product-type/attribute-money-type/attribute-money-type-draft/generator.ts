import { Generator } from '@/core';
import { TAttributeMoneyTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributemoneytype

export const generator = Generator<TAttributeMoneyTypeDraft>({
  fields: {
    name: 'money',
  },
});
