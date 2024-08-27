import { Transformer } from '@commercetools-test-data/core';
import type { T<ModelName>, T<ModelName>Graphql } from './types';

const transformers = {
  default: Transformer<T<ModelName>, T<ModelName>>('default', {
    buildFields: ['createdBy'],
  }),
  rest: Transformer<T<ModelName>, T<ModelName>>('rest', {
    buildFields: ['createdBy'],
  }),
  graphql: Transformer<T<ModelName>, T<ModelName>Graphql>('graphql', {
    buildFields: ['createdBy'],
    addFields: () => ({
      __typename: '<ModelName>',
    }),
  }),
};

export default transformers;
