import { Transformer } from '@commercetools-test-data/core';
import type { TAttributeDateTimeTypeGraphql, TAttributeDateTimeType } from './types';

const transformers = {
  default: Transformer<TAttributeDateTimeType, TAttributeDateTimeType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TAttributeDateTimeType, TAttributeDateTimeType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeDateTimeType, TAttributeDateTimeTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'DateTimeAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
