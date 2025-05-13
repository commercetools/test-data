import { Generator } from '@/core';
import { TCustomFieldMoneyType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldmoneytype

export const generator = Generator<TCustomFieldMoneyType>({
  fields: {
    name: 'Money',
  },
});
