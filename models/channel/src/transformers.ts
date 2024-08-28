import type {
  TClientLoggingGraphql} from '@commercetools-test-data/commons';
import {
  LocalizedString
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TChannel, TChannelGraphql } from './types';

const transformers = {
  default: Transformer<TChannel, TChannel>('default', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'description',
      'address',
    ],
  }),
  rest: Transformer<TChannel, TChannel>('rest', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'description',
      'address',
    ],
  }),
  graphql: Transformer<TChannel, TChannelGraphql>('graphql', {
    buildFields: ['address', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );

      return {
        ...fields,
        __typename: 'Channel',
        createdBy: fields.createdBy as TClientLoggingGraphql | undefined,
        lastModifiedBy: fields.lastModifiedBy as
          | TClientLoggingGraphql
          | undefined,
        nameAllLocales,
        name: LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales),
        descriptionAllLocales,
        description: LocalizedString.resolveGraphqlDefaultLocaleValue(
          descriptionAllLocales
        ),
      };
    },
  }),
};

export default transformers;
