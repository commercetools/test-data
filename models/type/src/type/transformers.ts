import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TType, TTypeGraphql } from './types';

const transformers = {
  default: Transformer<TType, TType>('default', {
    buildFields: ['name', 'description', 'createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TType, TType>('rest', {
    buildFields: ['name', 'description', 'createdBy', 'lastModifiedBy'],
  }),
  // Note that the Type graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TType, TTypeGraphql>('graphql', {
    buildFields: ['name', 'description', 'createdBy', 'lastModifiedBy'],
    addFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );

      return {
        __typename: 'Type',
        nameAllLocales,
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
