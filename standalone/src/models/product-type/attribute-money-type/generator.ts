import { Generator } from '../../../core';
import { TAttributeMoneyType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributemoneytype

export const generator = Generator<TAttributeMoneyType>({
  fields: {
    name: 'money',
  },
});
