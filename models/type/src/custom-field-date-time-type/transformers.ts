import { Transformer } from '@commercetools-test-data/core';
import type {
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
      __typename: 'DateTimeCustomFieldType',
    }),
  }),
};

export default transformers;
