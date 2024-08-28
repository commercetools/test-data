import { Generator } from '@commercetools-test-data/core';
import type { TCustomFieldEnumType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldenumtype

export const generator = Generator<TCustomFieldEnumType>({
  fields: {
    name: 'Enum',
    values: [],
  },
});
