import { buildField, Transformer } from '@commercetools-test-data/core';
import type { TAttributeDefinitionDraftGraphql } from '../../attribute-definition';
import type { TProductTypeDraft, TProductTypeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TProductTypeDraft, TProductTypeDraft>('default', {
    buildFields: ['attributes'],
  }),
  rest: Transformer<TProductTypeDraft, TProductTypeDraft>('rest', {
    buildFields: ['attributes'],
  }),
  graphql: Transformer<TProductTypeDraft, TProductTypeDraftGraphql>('graphql', {
    addFields: ({ fields }) => {
      return {
        attributeDefinitions: fields.attributes!.map((attribute) =>
          buildField(attribute, 'graphql')
        ) as unknown as Array<TAttributeDefinitionDraftGraphql>,
      };
    },
    removeFields: ['attributes'],
  }),
};

export default transformers;
