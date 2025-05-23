import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeBooleanTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeBooleanTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeBooleanTypeDraftRest` or `AttributeBooleanTypeDraftGraphql` exported models instead of `AttributeBooleanTypeDraft`.
 */
export const AttributeBooleanTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
