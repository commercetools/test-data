import { Generator } from '@/core';
import { TCustomFieldTimeType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldtimetype

export const generator = Generator<TCustomFieldTimeType>({
  fields: {
    name: 'Time',
  },
});
