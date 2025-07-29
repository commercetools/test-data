import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const PriceRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const PriceGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `PriceRest` or `PriceGraphql` exported models instead of `Price`.
 */
export const Price = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
