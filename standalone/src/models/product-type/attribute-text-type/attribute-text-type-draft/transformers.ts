import { Transformer } from '../../../../core';
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
      replaceFields: () => ({
        text: {
          dummy: null,
        },
      }),
    }
  ),
};

export default transformers;
