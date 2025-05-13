import { buildField, Transformer } from '@/core';
import {
  TAttributeEnumTypeDraftGraphql,
  TAttributeEnumTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<TAttributeEnumTypeDraft, TAttributeEnumTypeDraft>(
    'default',
    {
      buildFields: ['values'],
    }
  ),
  rest: Transformer<TAttributeEnumTypeDraft, TAttributeEnumTypeDraft>('rest', {
    buildFields: ['values'],
  }),
  graphql: Transformer<TAttributeEnumTypeDraft, TAttributeEnumTypeDraftGraphql>(
    'graphql',
    {
      buildFields: ['values'],
      replaceFields: ({ fields }) => ({
        enum: { values: fields.values },
      }),
    }
  ),
};

export default transformers;
