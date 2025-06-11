import {
  GraphqlModelBuilder,
  RestModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ProductSelectionSettingDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductSelectionSettingDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductSelectionSettingDraftGraphql` or `ProductSelectionSettingDraftRest` instead
 */
export const ProductSelectionSettingDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
