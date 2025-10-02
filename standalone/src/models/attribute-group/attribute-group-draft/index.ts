import {
  RestModelBuilder,
  GraphqlModelBuilder,
  AttributeGroupDraftCompatBuilder,
} from './builders';
import * as modelPresets from './presets';

// Presets can be added here if needed in the future
export const AttributeGroupDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeGroupDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeGroupDraftRest` or `AttributeGroupDraftGraphql` exported models instead of `AttributeGroupDraft`.
 */
export const AttributeGroupDraft = {
  random: AttributeGroupDraftCompatBuilder,
  presets: modelPresets.compatPresets,
};
