import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const StateRest = {
  constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const StateGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `StateRest` or `StateGraphql` exported models instead of `State`.
 */
export const State = {
  constants,
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
