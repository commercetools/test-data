import { Generator } from '@commercetools-test-data/core';
import { TAttributeMoneyTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributemoneytype

export const generator = Generator<TAttributeMoneyTypeDraft>({
  fields: {
    name: 'money',
  },
});
