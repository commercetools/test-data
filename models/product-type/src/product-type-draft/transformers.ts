import * as AttributeDefinition from '@commercetools-test-data/attribute-definition';
import { Transformer } from '@commercetools-test-data/core';
import type { TProductTypeDraft, TProductTypeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TProductTypeDraft, TProductTypeDraft>('default', {
    buildFields: ['attributes'],
  }),
  rest: Transformer<TProductTypeDraft, TProductTypeDraft>('rest', {
    buildFields: ['attributes'],
  }),
  graphql: Transformer<TProductTypeDraft, TProductTypeDraftGraphql>('graphql', {
    addFields: () => ({
      __typename: 'ProductTypeDraft',
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
