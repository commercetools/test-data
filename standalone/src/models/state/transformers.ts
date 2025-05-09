import { Transformer } from '../../core';
import { LocalizedString } from '../commons';
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
        name:
          LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales) ??
          null,
        description:
          LocalizedString.resolveGraphqlDefaultLocaleValue(
            descriptionAllLocales
          ) ?? null,
      };
    },
  }),
};

export default transformers;
