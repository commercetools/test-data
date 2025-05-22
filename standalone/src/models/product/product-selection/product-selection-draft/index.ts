import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ProductSelectionDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductSelectionDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductSelectionDraftRest` or `ProductSelectionDraftGraphql` exported models instead of `ProductSelectionDraft`.
 */
export const ProductSelectionDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
