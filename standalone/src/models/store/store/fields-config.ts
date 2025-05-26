import { fake, oneOf, sequence, type TModelFieldsConfig } from '@/core';
import { Channel } from '@/models/channel';
import {
  ClientLogging,
  LocalizedString,
  ReferenceGraphql,
  TLocalizedStringGraphql,
} from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TStoreRest, TStoreGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const restFieldsConfig: TModelFieldsConfig<TStoreRest> = {
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedString.random()),
    languages: [oneOf('en-US', 'de-DE', 'es-ES')],
    countries: [fake((f) => ({ code: f.location.countryCode() }))],
    distributionChannels: [fake(() => Channel.ChannelRest.random())],
    supplyChannels: [fake(() => Channel.ChannelRest.random())],
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
    createdBy: fake(() => ClientLogging.random()),
    productSelections: [],
    custom: null,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TStoreGraphql> = {
  fields: {
    __typename: 'Store',
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedString.random()),
    languages: [oneOf('en-US', 'de-DE', 'es-ES')],
    countries: [fake((f) => ({ code: f.location.countryCode() }))],
    productSelections: [],
    custom: null,
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedBy: fake(() => ClientLogging.random()),
    distributionChannels: [fake(() => Channel.ChannelRest.random())],
    supplyChannels: [fake(() => Channel.ChannelRest.random())],
    distributionChannelsRef: null,
    supplyChannelsRef: null,
    nameAllLocales: null,
  },
  postBuild: (model) => {
    const nameAllLocales = model.name as unknown as TLocalizedStringGraphql;
    const distributionChannelsRef = model.distributionChannels
      ? [
          ReferenceGraphql.random()
            .id(model.id)
            .typeId('channel')
            .buildGraphql(),
        ]
      : undefined;
    const supplyChannelsRef = model.supplyChannels
      ? [
          ReferenceGraphql.random()
            .id(model.id)
            .typeId('channel')
            .buildGraphql(),
        ]
      : undefined;
    return {
      nameAllLocales,
      distributionChannelsRef,
      supplyChannelsRef,
    };
  },
};
