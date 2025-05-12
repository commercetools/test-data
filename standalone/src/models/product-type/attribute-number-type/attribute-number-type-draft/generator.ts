import { Generator } from '../../../../core';
import { TAttributeNumberTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributenumbertype

export const generator = Generator<TAttributeNumberTypeDraft>({
  fields: {
    name: 'number',
  },
});
