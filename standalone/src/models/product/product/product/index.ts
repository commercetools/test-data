import {
  CompatProductModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const ProductRest = {
  constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductRest` or `ProductGraphql` exported models instead of `Product`.
 */
export const Product = {
  random: CompatProductModelBuilder,
  presets: modelPresets.compatPresets,
  constants,
};
