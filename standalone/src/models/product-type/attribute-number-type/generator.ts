import { Generator } from '../../../core';
import { TAttributeNumberType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributenumbertype

export const generator = Generator<TAttributeNumberType>({
  fields: {
    name: 'number',
  },
});
