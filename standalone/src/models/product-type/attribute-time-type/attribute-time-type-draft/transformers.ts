import { Transformer } from '@/core';
import { TAttributeEnumType } from '../../attribute-enum-type';
import {
  TAttributeTimeTypeDraftGraphql,
  TAttributeTimeTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<TAttributeTimeTypeDraft, TAttributeTimeTypeDraft>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TAttributeTimeTypeDraft, TAttributeTimeTypeDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeTimeTypeDraft, TAttributeTimeTypeDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      replaceFields: () => ({
        time: {
          dummy: null,
        },
      }),
    }
  ),
};

export default transformers;
