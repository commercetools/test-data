import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatProductVariantModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './product-variant-draft';
export * as ProductVariant from '.';

export * from './types';

export const ProductVariantRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductVariantGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductVariantRest` or `ProductVariantGraphql` exported models instead of `ProductVariant`.
 */
export const random = CompatProductVariantModelBuilder;
export const presets = modelPresets.compatPresets;
