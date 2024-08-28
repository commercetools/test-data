import { Transformer } from '@commercetools-test-data/core';
import type { TCustomFieldStringTypeGraphql, TCustomFieldStringType } from './types';

const transformers = {
  default: Transformer<TCustomFieldStringType, TCustomFieldStringType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TCustomFieldStringType, TCustomFieldStringType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldStringType, TCustomFieldStringTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'StringCustomFieldType',
      }),
    }
  ),
};

export default transformers;
