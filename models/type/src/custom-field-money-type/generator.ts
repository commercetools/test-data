import { Generator } from '@commercetools-test-data/core';
import type { TCustomFieldMoneyType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldmoneytype

export const generator = Generator<TCustomFieldMoneyType>({
  fields: {
    name: 'Money',
  },
});
