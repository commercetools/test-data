import * as constants from '../constants';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ProductSelectionDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
  constants,
};

export const ProductSelectionDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
  constants,
};

/**
 * @deprecated Use `ProductSelectionDraftRest` or `ProductSelectionDraftGraphql` exported models instead of `ProductSelectionDraft`.
 */
export const ProductSelectionDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
  constants,
};
