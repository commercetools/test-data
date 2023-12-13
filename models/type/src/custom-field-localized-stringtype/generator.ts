import { Generator } from '@commercetools-test-data/core';
import { TCustomFieldLocalizedStringtype } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldlocalizedstringtype

const generator = Generator<TCustomFieldLocalizedStringtype>({
  fields: {
    name: 'LocalizedString',
  },
});

export default generator;
