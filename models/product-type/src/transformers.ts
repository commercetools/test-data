import { Transformer } from '@commercetools-test-data/core';
import type { TProductType, TProductTypeGraphql } from './types';

const transformers = {
  default: Transformer<TProductType, TProductType>('default', {
    buildFields: ['attributes', 'createdBy', 'lastModifiedBy'],
    removeFields: ['attributeDefinitions'],
  }),
  rest: Transformer<TProductType, TProductType>('rest', {
    buildFields: ['attributes', 'createdBy', 'lastModifiedBy'],
    removeFields: ['attributeDefinitions'],
  }),
  graphql: Transformer<TProductType, TProductTypeGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    removeFields: ['attributes'],
    addFields: () => ({
      __typename: 'ProductTypeDefinition',
    }),
  }),
};

export default transformers;
