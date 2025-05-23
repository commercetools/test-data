import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeEnumTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeEnumTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeEnumTypeDraftRest` or `AttributeEnumTypeDraftGraphql` exported models instead of `AttributeEnumTypeDraft`.
 */
export const AttributeEnumTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
