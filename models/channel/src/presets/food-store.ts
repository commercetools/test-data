import { LocalizedString } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { ChannelGraphql, ChannelRest } from '../index';
import type { TChannelGraphql, TChannelRest } from '../types';

export const restPreset = (): TBuilder<TChannelRest> =>
  ChannelRest.random()
    .key('food-store-key')
    .name(
      LocalizedString.presets
        .empty()
        .en('Food Store')
        .de('Lebensmittelgeschäft')
    );

export const graphqlPreset = (): TBuilder<TChannelGraphql> =>
  ChannelGraphql.random()
    .key('food-store-key')
    .nameAllLocales([
      LocalizedString.presets
        .empty()
        .en('Food Store')
        .de('Lebensmittelgeschäft'),
    ]);
