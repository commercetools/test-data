import * as AttributeDefinitionDraft from '@commercetools-test-data/attribute-definition';
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
      attributeDefinitions: [AttributeDefinitionDraft.random().buildGraphql()],
    }),
  }),
};

export default transformers;
