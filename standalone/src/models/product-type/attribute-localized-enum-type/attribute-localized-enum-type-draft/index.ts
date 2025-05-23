import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeLocalizedEnumTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeLocalizedEnumTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeLocalizedEnumTypeDraftRest` or `AttributeLocalizedEnumTypeDraftGraphql` exported models instead of `AttributeLocalizedEnumTypeDraft`.
 */
export const AttributeLocalizedEnumTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
