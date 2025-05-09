import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatProductModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ProductDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductDraftRest` or `ProductDraftGraphql` exported models instead of `ProductDraft`.
 */
export const ProductDraft = {
  random: CompatProductModelBuilder,
  presets: modelPresets.compatPresets,
};
