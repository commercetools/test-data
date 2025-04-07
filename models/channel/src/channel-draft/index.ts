import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatChannelModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * as constants from '../constants';

export const ChannelDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ChannelDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ChannelDraftRest` or `ChannelDraftGraphql` exported models instead of `ChannelDraft`.
 */
export const ChannelDraft = {
  random: CompatChannelModelBuilder,
  presets: modelPresets.compatPresets,
};
