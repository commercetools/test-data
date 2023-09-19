import { Transformer } from '@commercetools-test-data/core';
import {
  TAttributeEnumTypeDraftGraphql,
  TAttributeEnumTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<TAttributeEnumTypeDraft, TAttributeEnumTypeDraft>(
    'default',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<TAttributeEnumTypeDraft, TAttributeEnumTypeDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      replaceFields: ({ fields }) => ({
        enum: { values: fields.values },
      }),
    }
  ),
};

export default transformers;
