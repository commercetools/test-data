import { Transformer, buildField } from '@commercetools-test-data/core';
import {
  LocalizedString,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { Channel } from '@commercetools/platform-sdk';
import type { TChannelGraphql } from './types';

const transformers = {
  default: Transformer<Channel, Channel>('default', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'description',
      'address',
    ],
  }),
  rest: Transformer<Channel, Channel>('rest', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'description',
      'address',
    ],
  }),
  graphql: Transformer<Channel, TChannelGraphql>('graphql', {
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
