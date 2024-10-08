import { LocalizedString } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { Channel, ChannelGraphql, ChannelRest } from '../index';
import type { TChannel, TChannelGraphql, TChannelRest } from '../types';

const populatePreset = <TModel extends TChannelGraphql | TChannelRest>(
  builder: TBuilder<TModel>,
  nameField: keyof TModel = 'name'
) => {
  return builder[nameField](
    LocalizedString.presets.empty().en('Clothes Store')
  ).key('clothes-store-key');
};

export const restPreset = (): TBuilder<TChannelRest> =>
  populatePreset(ChannelRest.random());

export const graphqlPreset = (): TBuilder<TChannelGraphql> =>
  populatePreset(ChannelGraphql.random(), 'nameAllLocales');

export const compatPreset = (): TBuilder<TChannel> =>
  populatePreset(Channel.random());
