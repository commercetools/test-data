import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatChannelModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export * from './channel-draft';
export * from './types';

export const ChannelRest = {
  constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ChannelGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ChannelRest` or `ChannelGraphql` exported models instead of `Channel`.
 */
export const Channel = {
  constants,
  random: CompatChannelModelBuilder,
  presets: modelPresets.compatPresets,
};
