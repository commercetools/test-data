import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeNumberTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeNumberTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeNumberTypeDraftRest` or `AttributeNumberTypeDraftGraphql` exported models instead of `AttributeNumberTypeDraft`.
 */
export const AttributeNumberTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
