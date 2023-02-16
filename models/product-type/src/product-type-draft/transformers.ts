import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductTypeDraftDefault,
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TProductTypeDraftDefault, TProductTypeDraftDefault>(
    'default',
    {
      buildFields: ['attributes', 'attributeDefinitions'],
    }
  ),
  rest: Transformer<TProductTypeDraftDefault, TProductTypeDraft>('rest', {
    buildFields: ['attributes'],
    removeFields: ['attributeDefinitions'],
  }),
  graphql: Transformer<TProductTypeDraftDefault, TProductTypeDraftGraphql>(
    'graphql',
    {
      buildFields: ['attributeDefinitions'],
      removeFields: ['attributes'],
      addFields: () => ({
        __typename: 'ProductTypeDraft',
      }),
    }
  ),
};

export default transformers;
