import { Transformer } from '@commercetools-test-data/core';
import { TAttributeEnumTypeGraphql, TAttributeEnumType } from './types';

const transformers = {
  default: Transformer<TAttributeEnumType, TAttributeEnumType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeEnumType, TAttributeEnumType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeEnumType, TAttributeEnumTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: ({ fields }) => ({
        __typename: 'EnumAttributionDefinitionType',
      }),
    }
  ),
};

export default transformers;
