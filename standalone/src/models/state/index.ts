import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const StateRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const StateGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `StateRest` or `StateGraphql` exported models instead of `State`.
 */
export const State = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
