import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeSetTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeSetTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeSetTypeDraftRest` or `AttributeSetTypeDraftGraphql` exported models instead of `AttributeSetTypeDraft`.
 */
export const AttributeSetTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
