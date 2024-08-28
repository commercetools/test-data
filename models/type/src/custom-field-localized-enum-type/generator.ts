import { fake, Generator } from '@commercetools-test-data/core';
import * as CustomFieldLocalizedEnumValue from '../custom-field-localized-enum-value';
import type { TCustomFieldLocalizedEnumType } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldlocalizedenumtype

const generator = Generator<TCustomFieldLocalizedEnumType>({
  fields: {
    name: 'lenum',
    values: fake(() => [CustomFieldLocalizedEnumValue.random()]),
  },
});

export default generator;
