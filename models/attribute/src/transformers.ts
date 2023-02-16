import { Transformer } from '@commercetools-test-data/core';
import type { TAttribute, TAttributeDefault, TAttributeGraphql } from './types';

const transformers = {
  default: Transformer<TAttributeDefault, TAttributeDefault>('default', {
    buildFields: ['attributeDefinition'],
  }),
  rest: Transformer<TAttributeDefault, TAttribute>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeDefault, TAttributeGraphql>('graphql', {
    buildFields: ['attributeDefinition'],
    addFields: () => ({
      __typename: 'RawProductAttribute',
    }),
  }),
};

export default transformers;
