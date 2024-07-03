import { LocalizedString } from '@commercetools-test-data/commons';
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
      addFields: ({ fields }) => ({
        labelAllLocales: LocalizedString.toLocalizedField(fields.label),
        __typename: 'AttributeDefinition',
      }),
    }
  ),
};

export default transformers;
