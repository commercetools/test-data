import { Generator } from '@/core';
import { TCustomFieldBooleanType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldbooleantype

export const generator = Generator<TCustomFieldBooleanType>({
  fields: {
    name: 'Boolean',
  },
});
