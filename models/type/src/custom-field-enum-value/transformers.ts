import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import {
  type TCustomFieldEnumValue,
  type TCustomFieldEnumValueGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomFieldEnumValue, TCustomFieldEnumValue>(
    'default',
    { buildFields: ['label'] }
  ),
  rest: Transformer<TCustomFieldEnumValue, TCustomFieldEnumValue>('rest', {
    buildFields: ['label'],
  }),
  graphql: Transformer<TCustomFieldEnumValue, TCustomFieldEnumValueGraphql>(
    'graphql',
    {
      buildFields: [],
      removeFields: ['label'],
      addFields: ({ fields }) => ({
        labelAllLocales: LocalizedString.toLocalizedField(fields.label),
        __typename: 'LocalizableEnumValueType',
      }),
    }
  ),
};

export default transformers;
