import { Generator } from '@commercetools-test-data/core';
import { TCustomFieldStringType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldstringtype

export const generator = Generator<TCustomFieldStringType>({
  fields: {
    name: 'String',
  },
});
