import { Generator } from '@commercetools-test-data/core';
import type { TCustomFieldStringType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldstringtype

export const generator = Generator<TCustomFieldStringType>({
  fields: {
    name: 'String',
  },
});
