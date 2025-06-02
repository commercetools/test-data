import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builder';
import * as presets from './presets';
import * as ProductSelectionSettingDraft from './product-selection-setting-draft';

export * from './types';

export const ProductSelectionSettingRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
  draft: ProductSelectionSettingDraft.restPresets,
};

export const ProductSelectionSettingGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
  draft: ProductSelectionSettingDraft.graphqlPresets,
};

/**
 * @deprecated Use `ProductSelectionSettingRest` or `ProductSelectionSettingGraphql` instead
 */
export const ProductSelectionSetting = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
  draft: ProductSelectionSettingDraft.compatPresets,
};
