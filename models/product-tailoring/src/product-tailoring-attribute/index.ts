import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ProductTailoringAttributePresets from './presets';
export * from './types';

export const ProductTailoringAttributeRest = {
  random: RestModelBuilder,
  presets: ProductTailoringAttributePresets.restPresets,
};

export const ProductTailoringAttributeGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductTailoringAttributePresets.graphqlPresets,
};
