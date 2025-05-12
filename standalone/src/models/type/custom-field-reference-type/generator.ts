import { Generator, oneOf } from '../../../core';
import { customReferenceTypeId } from './constants';
import { TCustomFieldReferenceType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldreferencetype

export const generator = Generator<TCustomFieldReferenceType>({
  fields: {
    name: 'Reference',
    referenceTypeId: oneOf(...Object.values(customReferenceTypeId)),
  },
});
