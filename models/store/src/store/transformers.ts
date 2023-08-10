import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TStore, TStoreGraphql } from './types';

const transformers = {
  default: Transformer<TStore, TStore>('default', {
    buildFields: [
      'name',
      'createdBy',
      'distributionChannels',
      'lastModifiedBy',
      'supplyChannels',
    ],
  }),

  rest: Transformer<TStore, TStore>('rest', {
    buildFields: [
      'name',
      'createdBy',
      'distributionChannels',
      'lastModifiedBy',
      'supplyChannels',
    ],
    replaceFields: ({ fields }) => ({
      ...fields,
      distributionChannels: [
        Reference.random().id(fields.id).typeId('channel').buildRest(),
      ],
      supplyChannels: [
        Reference.random().id(fields.id).typeId('channel').buildRest(),
      ],
    }),
  }),

  graphql: Transformer<TStore, TStoreGraphql>('graphql', {
    buildFields: [
      'name',
      'createdBy',
      'distributionChannels',
      'lastModifiedBy',
      'supplyChannels',
    ],
    addFields: ({ fields }) => ({
      nameAllLocales: LocalizedString.toLocalizedField(fields.name),
      distributionChannelsRef: fields.distributionChannels
        ? [Reference.random().id(fields.id).typeId('channel').buildGraphql()]
        : null,
      supplyChannelsRef: fields.supplyChannels
        ? [Reference.random().id(fields.id).typeId('channel').buildGraphql()]
        : null,
      __typename: 'Store',
    }),
  }),
};

export default transformers;
