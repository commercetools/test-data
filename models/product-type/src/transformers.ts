import * as AttributeDefinitionDraft from '@commercetools-test-data/attribute-definition';
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
      attributeDefinitions: [AttributeDefinitionDraft.random().buildGraphql()],
    }),
  }),
};

export default transformers;
