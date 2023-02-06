import { LocalizedString } from '@commercetools-test-data/commons';
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
    addFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );

      return {
        __typename: 'Channel',
        nameAllLocales,
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
