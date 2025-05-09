import { Transformer } from '../../../core';
import { type TAttributeSetType, type TAttributeSetTypeGraphql } from './types';

const transformers = {
  default: Transformer<TAttributeSetType, TAttributeSetType>('default', {
    buildFields: ['elementType'],
  }),

  rest: Transformer<TAttributeSetType, TAttributeSetType>('rest', {
    buildFields: ['elementType'],
  }),
  graphql: Transformer<TAttributeSetType, TAttributeSetTypeGraphql>('graphql', {
    buildFields: ['elementType'],
    addFields: () => ({
      __typename: 'SetAttributeDefinitionType',
    }),
  }),
};

export default transformers;
