import { Transformer, buildField } from '@commercetools-test-data/core';
import type { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
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
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'description',
      'address',
    ],
    addFields: ({ fields }) => {
      const nameAllLocales = buildField(fields.name ?? {}, 'graphql', {
        fieldToBuild: 'name',
      }) as unknown as TLocalizedStringGraphql;
      const descriptionAllLocales = buildField(
        fields.description ?? {},
        'graphql',
        {
          fieldToBuild: 'description',
        }
      ) as unknown as TLocalizedStringGraphql;

      return { __typename: 'Channel', nameAllLocales, descriptionAllLocales };
    },
  }),
};

export default transformers;
