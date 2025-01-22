import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatCartModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * as Cart from '.';

export * as constants from './constants';
export * from './types';

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
export const random = CompatCartModelBuilder;
export const presets = modelPresets.default;
