import { Transformer } from '@/core';
import {
  TAttributeReferenceTypeGraphql,
  TAttributeReferenceType,
} from './types';

const transformers = {
  default: Transformer<TAttributeReferenceType, TAttributeReferenceType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TAttributeReferenceType, TAttributeReferenceType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeReferenceType, TAttributeReferenceTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'ReferenceAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
