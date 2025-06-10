import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ProductVariantAvailabilityPresets from './presets';

export const ProductVariantAvailabilityRest = {
  random: RestModelBuilder,
  presets: ProductVariantAvailabilityPresets.restPresets,
};

export const ProductVariantAvailabilityGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductVariantAvailabilityPresets.graphqlPresets,
};
