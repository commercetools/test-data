import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeLocalizableTextTypeDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeLocalizableTextTypeDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeLocalizableTextTypeDraftRest` or `AttributeLocalizableTextTypeDraftGraphql` exported models instead of `AttributeLocalizableTextTypeDraft`.
 */
export const AttributeLocalizableTextTypeDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
