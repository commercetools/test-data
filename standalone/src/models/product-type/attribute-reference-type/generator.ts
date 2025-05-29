import { Generator, oneOf } from '@/core';
import { attributeReferenceTypeId } from './constants';
import { TAttributeReferenceType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributereferencetype

export const generator = Generator<TAttributeReferenceType>({
  fields: {
    name: 'reference',
    referenceTypeId: oneOf(...Object.values(attributeReferenceTypeId)),
  },
});
