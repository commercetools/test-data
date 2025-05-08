import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ReferenceDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ReferenceDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ReferenceDraftRest` or `ReferenceDraftGraphql` exported models instead of `ReferenceDraft`.
 */
export const ReferenceDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
