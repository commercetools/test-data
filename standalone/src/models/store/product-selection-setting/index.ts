import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builder';
export * as ProductSelectionSettingDraft from './product-selection-setting-draft';

export { default as presets } from './presets';
export * from './types';

export const ProductSelectionSettingRest = {
  random: RestModelBuilder,
};

export const ProductSelectionSettingGraphql = {
  random: GraphqlModelBuilder,
};

/**
 * @deprecated Use `ProductSelectionSettingRest` or `ProductSelectionSettingGraphql` instead
 */
export const ProductSelectionSetting = {
  random: CompatModelBuilder,
};
