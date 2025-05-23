import { Transformer } from '@/core';
import { TAttributeBooleanTypeGraphql, TAttributeBooleanType } from './types';

const transformers = {
  default: Transformer<TAttributeBooleanType, TAttributeBooleanType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TAttributeBooleanType, TAttributeBooleanType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeBooleanType, TAttributeBooleanTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'BooleanAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
