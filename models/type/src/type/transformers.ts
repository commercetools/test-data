import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TType, TTypeGraphql } from './types';

const transformers = {
  default: Transformer<TType, TType>('default', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'fieldDefinitions',
    ],
  }),
  rest: Transformer<TType, TType>('rest', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'fieldDefinitions',
    ],
  }),
  // Note that the Type graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TType, TTypeGraphql>('graphql', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'fieldDefinitions',
    ],
    addFields: ({ fields }) => {
      const nameAllLocales =
        LocalizedString.toLocalizedField(fields.name) ?? undefined;
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );

      return {
        __typename: 'TypeDefinition',
        nameAllLocales,
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
