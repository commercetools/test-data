import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const StateDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const StateDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `StateDraftRest` or `StateDraftGraphql` exported models instead of `StateDraft`.
 */
export const StateDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
