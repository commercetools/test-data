import { Transformer } from '@/core';
import { LocalizedString, Reference } from '@/models/commons';
import type { TStore, TStoreGraphql } from './types';

const buildFields: Array<keyof TStore> = [
  'name',
  'createdBy',
  'distributionChannels',
  'lastModifiedBy',
  'supplyChannels',
];

const transformers = {
  default: Transformer<TStore, TStore>('default', {
    buildFields,
  }),

  rest: Transformer<TStore, TStore>('rest', {
    buildFields,
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
    buildFields,
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
