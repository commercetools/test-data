import { Transformer } from '@commercetools-test-data/core';
import {
  TAttributeNumberTypeDraftGraphql,
  TAttributeNumberTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<TAttributeNumberTypeDraft, TAttributeNumberTypeDraft>(
    'default',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TAttributeNumberTypeDraft,
    TAttributeNumberTypeDraftGraphql
  >('graphql', {
    buildFields: [],
    replaceFields: () => ({
      number: {
        dummy: null,
      },
    }),
  }),
};

export default transformers;
