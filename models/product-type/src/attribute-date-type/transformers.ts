import { Transformer } from '@commercetools-test-data/core';
import { TAttributeDateTypeGraphql, TAttributeDateType } from './types';

const transformers = {
  default: Transformer<TAttributeDateType, TAttributeDateType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeDateType, TAttributeDateType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeDateType, TAttributeDateTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'DateAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
