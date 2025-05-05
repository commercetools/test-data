import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeDateTimeTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeDateTimeTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeDateTimeTypeDraftRest` or `AttributeDateTimeTypeDraftGraphql` exported models instead of `AttributeDateTimeTypeDraft`.
 */
export const AttributeDateTimeTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
