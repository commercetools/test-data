import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as SyncInfoPresets from './presets';

export const SyncInfoRest = {
  random: RestModelBuilder,
  presets: SyncInfoPresets.restPresets,
};

export const SyncInfoGraphql = {
  random: GraphqlModelBuilder,
  presets: SyncInfoPresets.graphqlPresets,
};
