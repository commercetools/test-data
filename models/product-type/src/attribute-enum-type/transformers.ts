import { Transformer } from '@commercetools-test-data/core';
import { TAttributeEnumTypeGraphql, TAttributeEnumType } from './types';

const transformers = {
  default: Transformer<TAttributeEnumType, TAttributeEnumType>('default', {
    buildFields: ['values'],
  }),
  rest: Transformer<TAttributeEnumType, TAttributeEnumType>('rest', {
    buildFields: ['values'],
  }),
  graphql: Transformer<TAttributeEnumType, TAttributeEnumTypeGraphql>(
    'graphql',
    {
      buildFields: ['values'],
      addFields: ({ fields }) => ({
        __typename: 'EnumAttributionDefinitionType',
      }),
    }
  ),
};

export default transformers;
