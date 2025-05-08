import { Generator } from '../../../../core';
import { TAttributeBooleanTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributebooleantype

export const generator = Generator<TAttributeBooleanTypeDraft>({
  fields: {
    name: 'boolean',
  },
});
