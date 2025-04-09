import { LocalizedString } from '@commercetools-test-data/commons';
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
    addFields: ({ fields }) => ({
      labelAllLocales:
        LocalizedString.toLocalizedField(fields.label) ?? undefined,
      __typename: 'FieldDefinition',
    }),
  }),
};

export default transformers;
