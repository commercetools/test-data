import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductTypeDefault,
  TProductType,
  TProductTypeGraphql,
} from './types';

const transformers = {
  default: Transformer<TProductTypeDefault, TProductTypeDefault>('default', {
    buildFields: [
      'attributes',
      'attributeDefinitions',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TProductTypeDefault, TProductType>('rest', {
    buildFields: ['attributes', 'createdBy', 'lastModifiedBy'],
    removeFields: ['attributeDefinitions'],
  }),
  graphql: Transformer<TProductTypeDefault, TProductTypeGraphql>('graphql', {
    buildFields: ['attributeDefinitions', 'createdBy', 'lastModifiedBy'],
    removeFields: ['attributes'],
    addFields: () => ({
      __typename: 'ProductTypeDefinition',
    }),
  }),
};

export default transformers;
