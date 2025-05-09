import { Generator } from '../../../core';
import { TCustomFieldLocalizedStringType } from './types';

// https://docs.commercetools.com/api/projects/types#CustomFieldLocalizedStringType

const generator = Generator<TCustomFieldLocalizedStringType>({
  fields: {
    name: 'LocalizedString',
  },
});

export default generator;
