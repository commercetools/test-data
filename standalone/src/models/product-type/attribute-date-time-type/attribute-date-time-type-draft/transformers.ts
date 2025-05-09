import { Transformer } from '../../../../core';
import { TAttributeEnumType } from '../../attribute-enum-type';
import {
  TAttributeDateTimeTypeDraftGraphql,
  TAttributeDateTimeTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<
    TAttributeDateTimeTypeDraft,
    TAttributeDateTimeTypeDraft
  >('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeDateTimeTypeDraft, TAttributeDateTimeTypeDraft>(
    'rest',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TAttributeDateTimeTypeDraft,
    TAttributeDateTimeTypeDraftGraphql
  >('graphql', {
    buildFields: [],
    replaceFields: () => ({
      datetime: {
        dummy: null,
      },
    }),
  }),
};

export default transformers;
