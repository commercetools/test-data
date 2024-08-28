import { fake, Generator } from '@commercetools-test-data/core';
import * as CustomFieldBooleanType from '../custom-field-boolean-type';
import type { TCustomFieldSetType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldsettype

const generator = Generator<TCustomFieldSetType>({
  fields: {
    name: 'Set',
    elementType: fake(() => CustomFieldBooleanType.random()),
  },
});

export default generator;
