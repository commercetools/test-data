import { fake, Generator } from '@/core';
import * as CustomFieldBooleanType from '../custom-field-boolean-type';
import { TCustomFieldSetType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldsettype

const generator = Generator<TCustomFieldSetType>({
  fields: {
    name: 'Set',
    elementType: fake(() => CustomFieldBooleanType.random()),
  },
});

export default generator;
