import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatLineItemModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const LineItemRest = {
  random: RestModelBuilder,
  presets: modelPresets.default,
};

export const LineItemGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.default,
};
/**
 * @deprecated Use `LineItemRest` or `LineItemGraphql` instead.
 */
export const LineItem = {
  random: CompatLineItemModelBuilder,
  presets: modelPresets.default,
  /**
   * @deprecated Import `constants` directly from this package root instead of accessing them via the `LineItem` model.
   */
  constants,
};
