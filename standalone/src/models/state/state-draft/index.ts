import * as constants from '../constants';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const StateDraftRest = {
  constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const StateDraftGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `StateDraftRest` or `StateDraftGraphql` exported models instead of `StateDraft`.
 */
export const StateDraft = {
  constants,
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
