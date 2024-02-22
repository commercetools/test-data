import { Generator } from '@commercetools-test-data/core';
import { TAttributeNumberTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributeenumtype

export const generator = Generator<TAttributeNumberTypeDraft>({
  fields: {
    name: 'number',
  },
});
