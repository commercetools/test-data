import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ProductTailoringPresets from './presets';
import {
  RestModelBuilder as ProductTailoringAttributeRestBuilder,
  GraphqlModelBuilder as ProductTailoringAttributeGraphqlBuilder,
} from './product-tailoring-attribute/builders';
import {
  RestModelBuilder as ProductTailoringDataRestBuilder,
  GraphqlModelBuilder as ProductTailoringDataGraphqlBuilder,
} from './product-tailoring-data/builders';
import {
  RestModelBuilder as ProductVariantTailoringRestBuilder,
  GraphqlModelBuilder as ProductVariantTailoringGraphqlBuilder,
} from './product-variant-tailoring/builders';

// Export all types
export * from './types';
export * from './product-tailoring-data/types';
export * from './product-variant-tailoring/types';
export * from './product-tailoring-attribute/types';

// Main Product Tailoring models
export const ProductTailoringRest = {
  random: RestModelBuilder,
  presets: ProductTailoringPresets.restPresets,
};

export const ProductTailoringGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductTailoringPresets.graphqlPresets,
};

// Product Tailoring Data models
export const ProductTailoringDataRest = {
  random: ProductTailoringDataRestBuilder,
};

export const ProductTailoringDataGraphql = {
  random: ProductTailoringDataGraphqlBuilder,
};

// Product Variant Tailoring models
export const ProductVariantTailoringRest = {
  random: ProductVariantTailoringRestBuilder,
};

export const ProductVariantTailoringGraphql = {
  random: ProductVariantTailoringGraphqlBuilder,
};

// Product Tailoring Attribute models
export const ProductTailoringAttributeRest = {
  random: ProductTailoringAttributeRestBuilder,
};

export const ProductTailoringAttributeGraphql = {
  random: ProductTailoringAttributeGraphqlBuilder,
};
