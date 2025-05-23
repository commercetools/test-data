import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeTextTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeTextTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeTextTypeDraftRest` or `AttributeTextTypeDraftGraphql` exported models instead of `AttributeTextTypeDraft`.
 */
export const AttributeTextTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
