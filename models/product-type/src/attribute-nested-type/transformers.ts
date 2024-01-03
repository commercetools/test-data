import { Transformer, buildField } from '@commercetools-test-data/core';
import { TAttributeNestedType, TAttributeNestedTypeGraphql } from './types';

const transformers = {
  default: Transformer<TAttributeNestedType, TAttributeNestedType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeNestedType, TAttributeNestedType>('rest', {
    replaceFields: ({ fields }: { fields: TAttributeNestedType }) => {
      return {
        ...fields,
        typeRef: fields.typeRef
          ? buildField(fields.typeRef, 'rest', {
              fieldToBuild: 'typeRef',
            })
          : null,
      };
    },
  }),
  graphql: Transformer<TAttributeNestedType, TAttributeNestedTypeGraphql>(
    'graphql',
    {
      replaceFields: ({ fields }: { fields: TAttributeNestedType }) => {
        return {
          ...fields,
          __typename: 'NestedAttributeDefinitionType',
          typeRef: fields.typeRef
            ? buildField(fields.typeRef, 'graphql', {
                fieldToBuild: 'typeRef',
              })
            : null,
        };
      },
    }
  ),
};

export default transformers;
