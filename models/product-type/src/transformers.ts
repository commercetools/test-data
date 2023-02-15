import * as AttributeDefinition from '@commercetools-test-data/attribute-definition';
import { Transformer } from '@commercetools-test-data/core';
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
    addFields: () => ({
      __typename: 'ProductTypeDefinition',
      // should this pattern be generalized?
      attributeDefinitions: {
        limit: 0,
        offset: 0,
        total: 0,
        results: [AttributeDefinition.random().buildGraphql()],
        __typename: 'AttributeDefinitionResult',
      },
    }),
  }),
};

export default transformers;
