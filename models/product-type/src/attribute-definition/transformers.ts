import { Transformer, buildField } from '@commercetools-test-data/core';
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
      replaceFields: ({ fields }: { fields: TAttributeDefinition }) => ({
        ...fields,
        __typename: 'AttributeDefinition',
        inputTipAllLocales: buildField(fields.inputTip, 'graphql', {
          fieldToBuild: 'inputTip',
        }),
        labelAllLocales: buildField(fields.label, 'graphql', {
          fieldToBuild: 'label',
        }),
        type: buildField(fields.type, 'graphql', {
          fieldToBuild: 'type',
        }),
        label: buildField(fields.label, 'default', {
          fieldToBuild: 'label',
        }).en,
        inputTip: buildField(fields.inputTip, 'default', {
          fieldToBuild: 'inputTip',
        }).en,
      }),
    }
  ),
};

export default transformers;
