import { fake, oneOf, sequence, type TModelFieldsConfig } from '@/core';
import { Channel, ChannelGraphql } from '@/models/channel';
import {
  ClientLogging,
  LocalizedString,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TStoreRest, TStoreGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  custom: null,
  countries: [fake((f) => ({ code: f.location.countryCode() }))],
  key: fake((f) => f.lorem.slug()),
  languages: [oneOf('en-US', 'de-DE', 'es-ES')],
  productSelections: [],
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  version: sequence(),
};

export const restFieldsConfig: TModelFieldsConfig<TStoreRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake(() => LocalizedString.random()),
    distributionChannels: [
      fake(() => ReferenceRest.presets.channelReference()),
    ],
    supplyChannels: [fake(() => ReferenceRest.presets.channelReference())],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TStoreGraphql> = {
  fields: {
    __typename: 'Store',
    ...commonFieldsConfig,
    distributionChannels: [fake(() => Channel.ChannelRest.random())],
    distributionChannelsRef: null,
    name: null,
    nameAllLocales: fake(() => LocalizedString.random()),
    supplyChannels: fake(() => [ChannelGraphql.random()]),
    supplyChannelsRef: null,
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : model.nameAllLocales;
    const distributionChannelsRef = model.distributionChannels
      ? model.distributionChannels.map((channel) =>
          ReferenceGraphql.presets
            .channelReference()
            .id(channel.id)
            .buildGraphql()
        )
      : undefined;
    const supplyChannelsRef = model.supplyChannels
      ? model.supplyChannels.map((channel) =>
          ReferenceGraphql.presets
            .channelReference()
            .id(channel.id)
            .buildGraphql()
        )
      : undefined;
    return {
      name,
      distributionChannelsRef,
      supplyChannelsRef,
    };
  },
};
