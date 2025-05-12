import type { TBuilder } from '../../../core';
import { LocalizedString } from '../../commons';
import { Channel, ChannelGraphql, ChannelRest } from '../index';
import type { TChannel, TChannelGraphql, TChannelRest } from '../types';

const populatePreset = <TModel extends TChannelGraphql | TChannelRest>(
  builder: TBuilder<TModel>,
  nameField: keyof TModel = 'name'
) => {
  return builder[nameField](
    LocalizedString.presets.empty().en('Food Store').de('Lebensmittelgeschäft')
  ).key('food-store-key');
};

export const restPreset = (): TBuilder<TChannelRest> =>
  populatePreset(ChannelRest.random());

export const graphqlPreset = (): TBuilder<TChannelGraphql> =>
  populatePreset(ChannelGraphql.random(), 'nameAllLocales');

export const compatPreset = (): TBuilder<TChannel> =>
  populatePreset(Channel.random());
