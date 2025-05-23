import { Transformer } from '@/core';
import {
  TCustomFieldDateTimeTypeGraphql,
  TCustomFieldDateTimeType,
} from './types';

const transformers = {
  default: Transformer<TCustomFieldDateTimeType, TCustomFieldDateTimeType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TCustomFieldDateTimeType, TCustomFieldDateTimeType>(
    'rest',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TCustomFieldDateTimeType,
    TCustomFieldDateTimeTypeGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'DateTimeType',
    }),
  }),
};

export default transformers;
