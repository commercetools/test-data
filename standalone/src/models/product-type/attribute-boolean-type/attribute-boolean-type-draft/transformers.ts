import { Transformer } from '@/core';
import {
  TAttributeBooleanTypeDraftGraphql,
  TAttributeBooleanTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<TAttributeBooleanTypeDraft, TAttributeBooleanTypeDraft>(
    'default',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TAttributeBooleanTypeDraft,
    TAttributeBooleanTypeDraftGraphql
  >('graphql', {
    buildFields: [],
    replaceFields: () => ({
      boolean: {
        dummy: null,
      },
    }),
  }),
};

export default transformers;
