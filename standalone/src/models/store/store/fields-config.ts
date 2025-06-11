import { fake, oneOf, sequence, type TModelFieldsConfig } from '@/core';
import { Channel } from '@/models/channel';
import {
  ClientLogging,
  LocalizedString,
  ReferenceGraphql,
} from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TStoreRest, TStoreGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
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
  productSelections: [],
  custom: null,
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedBy: fake(() => ClientLogging.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TStoreRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TStoreGraphql> = {
  fields: {
    __typename: 'Store',
    ...commonFieldsConfig,
    lastModifiedAt: fake(getNewerDate),
    distributionChannels: [fake(() => Channel.ChannelRest.random())],
    distributionChannelsRef: null,
    supplyChannelsRef: null,
    nameAllLocales: fake((f) => LocalizedString.random()),
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : model.nameAllLocales;
    const distributionChannelsRef = model.distributionChannels
      ? [
          ReferenceGraphql.presets
            .channelReference()
            .id(model.id)
            .buildGraphql(),
        ]
      : undefined;
    const supplyChannelsRef = model.supplyChannels
      ? [
          ReferenceGraphql.presets
            .channelReference()
            .id(model.id)
            .buildGraphql(),
        ]
      : undefined;
    return {
      name,
      distributionChannelsRef,
      supplyChannelsRef,
    };
  },
};
