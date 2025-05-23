import { Generator, oneOf } from '@/core';
import { attributeReferenceTypeId } from '../constants';
import { TAttributeReferenceTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributereferencetype

export const generator = Generator<TAttributeReferenceTypeDraft>({
  fields: {
    name: 'reference',
    referenceTypeId: oneOf(...Object.values(attributeReferenceTypeId)),
  },
});
