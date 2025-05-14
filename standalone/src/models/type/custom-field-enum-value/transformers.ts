import { Transformer } from '@/core';
import { LocalizedString } from '@/models/commons';
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
