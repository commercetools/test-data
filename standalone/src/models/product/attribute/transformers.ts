import { Transformer } from '../../../core';
import type { TAttribute, TAttributeRest, TAttributeGraphql } from './types';

const transformers = {
  default: Transformer<TAttribute, TAttribute>('default', {
    buildFields: ['attributeDefinition'],
  }),
  rest: Transformer<TAttribute, TAttributeRest>('rest', {
    buildFields: [],
    replaceFields: ({ fields }) => ({
      name: fields.name,
      value: fields.value,
    }),
  }),
  graphql: Transformer<TAttribute, TAttributeGraphql>('graphql', {
    buildFields: ['attributeDefinition'],
    addFields: () => ({
      __typename: 'RawProductAttribute',
    }),
  }),
};

export default transformers;
