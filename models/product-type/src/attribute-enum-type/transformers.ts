import { Transformer, buildField } from '@commercetools-test-data/core';
import type { TAttributeEnumTypeGraphql, TAttributeEnumType } from './types';

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
      replaceFields: ({ fields }) => ({
        ...fields,
        values: {
          results: fields.values.map((value) => buildField(value, 'graphql')),
          __typename: 'PlainEnumValueResult',
        },
        __typename: 'EnumAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
