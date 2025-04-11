import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeDateTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeDateTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeDateTypeDraftRest` or `AttributeDateTypeDraftGraphql` exported models instead of `AttributeDateTypeDraft`.
 */
export const AttributeDateTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
