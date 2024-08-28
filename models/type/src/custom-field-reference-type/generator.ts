import { Generator, oneOf } from '@commercetools-test-data/core';
import { customReferenceTypeId } from './constants';
import type { TCustomFieldReferenceType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldreferencetype

export const generator = Generator<TCustomFieldReferenceType>({
  fields: {
    name: 'Reference',
    referenceTypeId: oneOf(...Object.values(customReferenceTypeId)),
  },
});
