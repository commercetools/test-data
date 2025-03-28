import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatProductVariantModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ProductVariantDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductVariantDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

export * as ProductVariantDraft from '.';
/**
 * @deprecated Use `ProductVariantDraftRest` or `ProductVariantDraftGraphql` exported models instead of `ProductVariantDraft`.
 */
export const random = CompatProductVariantModelBuilder;
export const presets = modelPresets.compatPresets;
