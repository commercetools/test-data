import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatCartModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';
export * as constants from './constants';

export const CartRest = {
  random: RestModelBuilder,
  presets: modelPresets.default,
};

export const CartGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.default,
};

/**
 * @deprecated Use `CartRest` or `CartGraphql` exported models instead of `Cart`.
 */
export const Cart = {
  random: CompatCartModelBuilder,
  presets: modelPresets.default,
  /**
   * @deprecated Import `constants` directly from this package root instead of accessing them via the `Cart` model.
   */
  constants,
};
