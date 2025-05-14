import { Generator } from '@/core';
import { TCustomFieldNumberType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldnumbertype

export const generator = Generator<TCustomFieldNumberType>({
  fields: {
    name: 'Number',
  },
});
