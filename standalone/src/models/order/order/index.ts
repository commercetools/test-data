import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatOrderModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const OrderRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
  constants: constants,
};

export const OrderGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
  constants: constants,
};

/**
 * @deprecated Use `OrderRest` or `OrderGraphql` exported models instead of `Order`.
 */
export const Order = {
  random: CompatOrderModelBuilder,
  presets: modelPresets.compatPresets,
  /**
   * @deprecated Import `constants` directly from this package root instead of accessing them via the `Order` model.
   */
  constants,
};
