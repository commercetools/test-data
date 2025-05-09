import { Generator } from '../../../core';
import { TCustomFieldDateType } from './types';

// https://docs.commercetools.com/api/projects/types#customfielddatetype

export const generator = Generator<TCustomFieldDateType>({
  fields: {
    name: 'Date',
  },
});
