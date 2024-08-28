import { Generator } from '@commercetools-test-data/core';
import type { TCustomFieldDateTimeType } from './types';

// https://docs.commercetools.com/api/projects/types#customfielddatetimetype

export const generator = Generator<TCustomFieldDateTimeType>({
  fields: {
    name: 'DateTime',
  },
});
