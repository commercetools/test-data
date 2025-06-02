import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builder';
import * as presets from './presets';

export * from './types';

export const ProductSelectionSettingRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const ProductSelectionSettingGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `ProductSelectionSettingRest` or `ProductSelectionSettingGraphql` instead
 */
export const ProductSelectionSetting = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};
