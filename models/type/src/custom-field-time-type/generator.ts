import { Generator } from '@commercetools-test-data/core';
import type { TCustomFieldTimeType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldtimetype

export const generator = Generator<TCustomFieldTimeType>({
  fields: {
    name: 'Time',
  },
});
