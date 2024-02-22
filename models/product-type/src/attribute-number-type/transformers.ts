import { Transformer } from '@commercetools-test-data/core';
import { TAttributeNumberTypeGraphql, TAttributeNumberType } from './types';

const transformers = {
  default: Transformer<TAttributeNumberType, TAttributeNumberType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeNumberType, TAttributeNumberType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeNumberType, TAttributeNumberTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'NumberAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
