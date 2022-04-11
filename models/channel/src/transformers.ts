import { Transformer } from '@commercetools-test-data/core';
import {
  LocalizedString,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
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
    addFields: () => {
      const nameAllLocales =
        LocalizedString.random().buildGraphql<TLocalizedStringGraphql>();
      const descriptionAllLocales =
        LocalizedString.random().buildGraphql<TLocalizedStringGraphql>();

      return {
        __typename: 'Channel',
        nameAllLocales,
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
