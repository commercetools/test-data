import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ProductVariantTailoringPresets from './presets';
export * from './types';

export const ProductVariantTailoringRest = {
  random: RestModelBuilder,
  presets: ProductVariantTailoringPresets.restPresets,
};

export const ProductVariantTailoringGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductVariantTailoringPresets.graphqlPresets,
};
