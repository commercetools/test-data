import { Transformer } from '@commercetools-test-data/core';
import type {
  TAttributeTextTypeDraftGraphql,
  TAttributeTextTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<TAttributeTextTypeDraft, TAttributeTextTypeDraft>(
    'default',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<TAttributeTextTypeDraft, TAttributeTextTypeDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      replaceFields: () => ({
        text: {
          dummy: null,
        },
      }),
    }
  ),
};

export default transformers;
