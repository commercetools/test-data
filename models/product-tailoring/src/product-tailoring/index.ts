import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ProductTailoringPresets from './presets';

// Export all types
export * from './types';

// Main Product Tailoring models
export const ProductTailoringRest = {
  random: RestModelBuilder,
  presets: ProductTailoringPresets.restPresets,
};

export const ProductTailoringGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductTailoringPresets.graphqlPresets,
};
