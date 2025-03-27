// export { default as random } from './builder';
// export { default as presets } from './presets';

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

/**
 * @deprecated Use `ProductVariantDraftRest` or `ProductVariantDraftGraphql` exported models instead of `ProductVariantDraft`.
 */
export const ProductVariantDraft = {
  random: CompatProductVariantModelBuilder,
  presets: modelPresets.compatPresets,
};
