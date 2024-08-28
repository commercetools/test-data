import { Generator } from '@commercetools-test-data/core';
import type { TCustomFieldBooleanType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldbooleantype

export const generator = Generator<TCustomFieldBooleanType>({
  fields: {
    name: 'Boolean',
  },
});
