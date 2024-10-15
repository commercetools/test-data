import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatChannelModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './channel-draft';
export * as Channel from '.';

export * as constants from './constants';
export * from './types';

export const ChannelRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ChannelGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ChannelRest` or `ChannelGraphql` exported models instead of `Channel`.
 */
export const random = CompatChannelModelBuilder;
export const presets = modelPresets.restPresets;
