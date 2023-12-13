import { Transformer } from '@commercetools-test-data/core';
import { TCustomFieldStringTypeGraphql, TCustomFieldStringType } from './types';

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
        __typename: 'TextCustomFieldType',
      }),
    }
  ),
};

export default transformers;
