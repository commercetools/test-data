import { Transformer } from '@/core';
import { TAttributeTimeTypeGraphql, TAttributeTimeType } from './types';

const transformers = {
  default: Transformer<TAttributeTimeType, TAttributeTimeType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeTimeType, TAttributeTimeType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeTimeType, TAttributeTimeTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'TimeAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
