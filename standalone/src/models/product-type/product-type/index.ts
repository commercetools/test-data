import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ProductTypeRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductTypeGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductTypeRest` or `ProductTypeGraphql` exported models instead of `ProductType`.
 */
export const ProductType = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
