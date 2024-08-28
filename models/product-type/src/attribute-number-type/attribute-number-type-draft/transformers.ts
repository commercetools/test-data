import { Transformer } from '@commercetools-test-data/core';
import { TAttributeEnumType } from '../../attribute-enum-type';
import type {
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
  rest: Transformer<TAttributeNumberTypeDraft, TAttributeNumberTypeDraft>(
    'rest',
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
