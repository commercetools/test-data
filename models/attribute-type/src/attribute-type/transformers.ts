import { Transformer } from '@commercetools-test-data/core';
import { TAttributeType, TAttributeTypeGraphql } from './types';

const transformers = {
  default: Transformer<TAttributeType, TAttributeType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeType, TAttributeType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeType, TAttributeTypeGraphql>('graphql', {
    buildFields: [],
    addFields: ({ fields }) => ({ __typename: fields.name }),
  }),
};

export default transformers;
