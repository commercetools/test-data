import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const AttributeLocalizedEnumValueDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const AttributeLocalizedEnumValueDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `AttributeLocalizedEnumValueDraftRest` or `AttributeLocalizedEnumValueDraftGraphql` exported models instead of `AttributeLocalizedEnumValueDraft`.
 */
export const AttributeLocalizedEnumValueDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
