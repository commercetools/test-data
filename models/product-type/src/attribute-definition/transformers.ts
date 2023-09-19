import { Transformer } from '@commercetools-test-data/core';
import type {
  TAttributeDefinition,
  TAttributeDefinitionGraphql,
} from './types';

const transformers = {
  default: Transformer<TAttributeDefinition, TAttributeDefinition>('default', {
    buildFields: ['label', 'inputTip', 'type'],
  }),
  rest: Transformer<TAttributeDefinition, TAttributeDefinition>('rest', {
    buildFields: ['label', 'inputTip', 'type'],
  }),
  graphql: Transformer<TAttributeDefinition, TAttributeDefinitionGraphql>(
    'graphql',
    {
      buildFields: ['label', 'inputTip', 'type'],
      addFields: () => ({ __typename: 'AttributeDefinition' }),
    }
  ),
};

export default transformers;
