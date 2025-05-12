import { Generator } from '../../../../core';
import { TAttributeTextTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributeenumtype

export const generator = Generator<TAttributeTextTypeDraft>({
  fields: {
    name: 'text',
  },
});
