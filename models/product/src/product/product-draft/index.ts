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

export * as ProductDraft from '.';
/**
 * @deprecated Use `ProductDraftRest` or `ProductDraftGraphql` exported models instead of `ProductDraft`.
 */
export const random = CompatProductModelBuilder;
export const presets = modelPresets.compatPresets;
