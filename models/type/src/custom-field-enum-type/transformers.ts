import { Transformer } from '@commercetools-test-data/core';
import { TCustomFieldEnumTypeGraphql, TCustomFieldEnumType } from './types';

const transformers = {
  default: Transformer<TCustomFieldEnumType, TCustomFieldEnumType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCustomFieldEnumType, TCustomFieldEnumType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldEnumType, TCustomFieldEnumTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'EnumType',
      }),
    }
  ),
};

export default transformers;
