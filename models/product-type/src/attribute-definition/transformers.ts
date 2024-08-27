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
      buildFields: ['type'],
      replaceFields: ({ fields }) => {
        const labelAllLocales = LocalizedString.toLocalizedField(fields.label);
        const inputTipAllLocales = LocalizedString.toLocalizedField(
          fields.inputTip
        );
        return {
          ...fields,
          labelAllLocales,
          label:
            LocalizedString.resolveGraphqlDefaultLocaleValue(labelAllLocales)!,
          inputTipAllLocales,
          inputTip:
            LocalizedString.resolveGraphqlDefaultLocaleValue(
              inputTipAllLocales
            )!,
          __typename: 'AttributeDefinition',
        };
      },
    }
  ),
};

export default transformers;
