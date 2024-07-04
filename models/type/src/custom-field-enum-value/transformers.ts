import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import {
  type TCustomFieldEnumValue,
  type TCustomFieldEnumValueGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomFieldEnumValue, TCustomFieldEnumValue>(
    'default',
    { buildFields: [] }
  ),
  rest: Transformer<TCustomFieldEnumValue, TCustomFieldEnumValue>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldEnumValue, TCustomFieldEnumValueGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'EnumValue',
      }),
    }
  ),
};

export default transformers;
