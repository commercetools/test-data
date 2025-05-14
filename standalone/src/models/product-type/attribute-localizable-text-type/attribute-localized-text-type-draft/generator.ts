import { Generator } from '@/core';
import { TAttributeLocalizableTextTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizabletexttype

export const generator = Generator<TAttributeLocalizableTextTypeDraft>({
  fields: {
    name: 'ltext',
  },
});
