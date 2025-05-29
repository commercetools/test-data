import { Transformer, buildField } from '@/core';
import {
  TAttributeSetTypeDraft,
  TAttributeSetTypeDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TAttributeSetTypeDraft, TAttributeSetTypeDraft>(
    'default',
    {
      buildFields: ['elementType'],
    }
  ),
  graphql: Transformer<TAttributeSetTypeDraft, TAttributeSetTypeDraftGraphql>(
    'graphql',
    {
      replaceFields: ({ fields }) => {
        return {
          [fields.name]: {
            elementType: buildField(fields.elementType, 'graphql'),
          },
        };
      },
    }
  ),
};

export default transformers;
