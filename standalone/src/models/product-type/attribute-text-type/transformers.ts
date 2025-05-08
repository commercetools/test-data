import { Transformer } from '../../../core';
import { TAttributeTextTypeGraphql, TAttributeTextType } from './types';

const transformers = {
  default: Transformer<TAttributeTextType, TAttributeTextType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAttributeTextType, TAttributeTextType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TAttributeTextType, TAttributeTextTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'TextAttributeDefinitionType',
      }),
    }
  ),
};

export default transformers;
