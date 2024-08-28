import { Transformer } from '@commercetools-test-data/core';
import { TAttributeEnumType } from '../../attribute-enum-type';
import type {
  TAttributeDateTypeDraftGraphql,
  TAttributeDateTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<TAttributeDateTypeDraft, TAttributeDateTypeDraft>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TAttributeDateTypeDraft, TAttributeDateTypeDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeDateTypeDraft, TAttributeDateTypeDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      replaceFields: () => ({
        date: {
          dummy: null,
        },
      }),
    }
  ),
};

export default transformers;
