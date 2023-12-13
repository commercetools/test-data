import { Generator } from '@commercetools-test-data/core';
import { TCustomFieldNumberType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldnumbertype

export const generator = Generator<TCustomFieldNumberType>({
  fields: {
    name: 'Number',
  },
});
