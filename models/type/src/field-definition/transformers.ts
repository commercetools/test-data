import { Transformer } from '@commercetools-test-data/core';
import type { TFieldDefinition, TFieldDefinitionGraphql } from './types';

const transformers = {
  default: Transformer<TFieldDefinition, TFieldDefinition>('default', {
    buildFields: ['label', 'type'],
  }),
  rest: Transformer<TFieldDefinition, TFieldDefinition>('rest', {
    buildFields: ['label', 'type'],
  }),
  graphql: Transformer<TFieldDefinition, TFieldDefinitionGraphql>('graphql', {
    buildFields: ['label', 'type'],
    addFields: () => ({ __typename: 'FieldDefinition' }),
  }),
};

export default transformers;
