import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TState, TStateGraphql } from './types';

const transformers = {
  default: Transformer<TState, TState>('default', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'transitions',
    ],
  }),
  rest: Transformer<TState, TState>('rest', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'transitions',
    ],
  }),
  // Note that the State graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TState, TStateGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy', 'transitions'],
    replaceFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );

      return {
        ...(fields as unknown as TStateGraphql),
        __typename: 'State',
        nameAllLocales,
        descriptionAllLocales,
        name: LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales)!,
        description: LocalizedString.resolveGraphqlDefaultLocaleValue(
          descriptionAllLocales
        ),
      };
    },
  }),
};

export default transformers;
