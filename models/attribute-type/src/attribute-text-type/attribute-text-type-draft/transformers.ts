import { Transformer } from '@commercetools-test-data/core';
import {
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
      replaceFields: ({ fields }) => ({
        text: {
          dummy: fields.name,
        },
      }),
    }
  ),
};

export default transformers;
