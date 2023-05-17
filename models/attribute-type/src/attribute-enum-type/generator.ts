import { Generator } from '@commercetools-test-data/core';
import { TAttributeEnumType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributeenumtype

export const generator = Generator<TAttributeEnumType>({
  fields: {
    name: 'enum',
    values: [],
  },
});
