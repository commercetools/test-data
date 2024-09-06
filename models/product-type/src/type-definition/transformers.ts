import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TTypeDefinition, TTypeDefinitionGraphql } from './types';

const buildFields: (keyof TTypeDefinition)[] = [
  'name',
  'description',
  'fieldDefinitions',
  'createdBy',
  'lastModifiedBy',
];

const transformers = {
  default: Transformer<TTypeDefinition, TTypeDefinition>('default', {
    buildFields,
  }),
  rest: Transformer<TTypeDefinition, TTypeDefinition>('rest', {
    buildFields,
  }),
  graphql: Transformer<TTypeDefinition, TTypeDefinitionGraphql>('graphql', {
    buildFields: ['fieldDefinitions', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name)!;
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );
      const name =
        LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales);
      const description = LocalizedString.resolveGraphqlDefaultLocaleValue(
        descriptionAllLocales
      );

      return {
        ...fields,
        nameAllLocales,
        descriptionAllLocales: descriptionAllLocales || undefined,
        name,
        description,
        __typename: 'TypeDefinition',
      };
    },
  }),
};

export default transformers;
