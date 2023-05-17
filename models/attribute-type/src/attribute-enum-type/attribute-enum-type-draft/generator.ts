import { Generator } from '@commercetools-test-data/core';
import { TAttributeEnumTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributeenumtype

export const generator = Generator<TAttributeEnumTypeDraft>({
  fields: {
    name: 'enum',
    values: null,
  },
});
