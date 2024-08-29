import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TTypeDefinition, TTypeDefinitionGraphql } from './types';

const transformers = {
  default: Transformer<TTypeDefinition, TTypeDefinition>('default', {
    buildFields: ['fieldDefinitions'],
  }),
  rest: Transformer<TTypeDefinition, TTypeDefinition>('rest', {
    buildFields: ['fieldDefinitions'],
  }),
  graphql: Transformer<TTypeDefinition, TTypeDefinitionGraphql>('graphql', {
    buildFields: ['fieldDefinitions'],
    replaceFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);

      return {
        ...fields,
        nameAllLocales,
        __typename: 'TypeDefinition',
      };
    },
  }),
};

export default transformers;
