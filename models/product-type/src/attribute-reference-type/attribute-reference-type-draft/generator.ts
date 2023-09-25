import { Generator, oneOf } from '@commercetools-test-data/core';
import { attributeReferenceTypeId } from '../constants';
import { TAttributeReferenceTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributereferencetype

export const generator = Generator<TAttributeReferenceTypeDraft>({
  fields: {
    referenceTypeId: oneOf(...Object.values(attributeReferenceTypeId)),
  },
});
