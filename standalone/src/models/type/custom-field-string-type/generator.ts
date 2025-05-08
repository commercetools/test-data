import { Generator } from '../../../core';
import { TCustomFieldStringType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldstringtype

export const generator = Generator<TCustomFieldStringType>({
  fields: {
    name: 'String',
  },
});
