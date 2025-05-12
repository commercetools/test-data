import { Transformer, buildField } from '../../../core';
import { TAttributeDefinitionGraphql } from '../attribute-definition';
import type { TProductType, TProductTypeGraphql } from './types';

const transformers = {
  default: Transformer<TProductType, TProductType>('default', {
    buildFields: ['attributes', 'createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TProductType, TProductType>('rest', {
    buildFields: ['attributes', 'createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TProductType, TProductTypeGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: ({ fields }) => ({
      __typename: 'ProductTypeDefinition',
      attributeDefinitions: {
        results: fields.attributes!.map((attribute) =>
          buildField(attribute, 'graphql')
        ) as unknown as Array<TAttributeDefinitionGraphql>,
        total: fields.attributes!.length,
        __typename: 'AttributeDefinitionResult',
      },
    }),
  }),
};

export default transformers;
