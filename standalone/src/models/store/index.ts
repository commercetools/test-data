import * as ProductSelectionSettingModel from './product-selection-setting';
import * as ProductSelectionSettingDraftModel from './product-selection-setting/product-selection-setting-draft';
import * as StoreModel from './store';
import * as StoreDraftModel from './store/store-draft';

// Export types
export * from './store/types';
export * from './product-selection-setting/types';

// Export models
export const StoreRest = {
  random: StoreModel.StoreRest.random,
  presets: StoreModel.StoreRest.presets,
};

export const StoreGraphql = {
  random: StoreModel.StoreGraphql.random,
  presets: StoreModel.StoreGraphql.presets,
};

export const StoreDraftRest = {
  random: StoreDraftModel.StoreDraftRest.random,
  presets: StoreDraftModel.StoreDraftRest.presets,
};

export const StoreDraftGraphql = {
  random: StoreDraftModel.StoreDraftGraphql.random,
  presets: StoreDraftModel.StoreDraftGraphql.presets,
};

export const ProductSelectionSettingRest = {
  random: ProductSelectionSettingModel.ProductSelectionSettingRest.random,
  presets: ProductSelectionSettingModel.ProductSelectionSettingRest.presets,
};

export const ProductSelectionSettingGraphql = {
  random: ProductSelectionSettingModel.ProductSelectionSettingGraphql.random,
  presets: ProductSelectionSettingModel.ProductSelectionSettingGraphql.presets,
};

export const ProductSelectionSettingDraftRest = {
  random: ProductSelectionSettingDraftModel.restPresets.random,
  presets: ProductSelectionSettingDraftModel.restPresets.presets,
};

export const ProductSelectionSettingDraftGraphql = {
  random: ProductSelectionSettingDraftModel.graphqlPresets.random,
  presets: ProductSelectionSettingDraftModel.graphqlPresets.presets,
};

/**
 * @deprecated Use `StoreRest` or `StoreGraphql` exported models instead of  `Store`
 */
export const Store = {
  random: StoreModel.StoreRest.random,
  presets: StoreModel.StoreRest.presets,
};

/**
 * @deprecated Use `ProductSelectionSettingRest` or `ProductSelectionSettingGraphql` exported models instead of  `ProductSelectionSetting`
 */
export const ProductSelectionSetting = {
  random: ProductSelectionSettingModel.ProductSelectionSettingRest.random,
  presets: ProductSelectionSettingModel.ProductSelectionSettingRest.presets,
};
