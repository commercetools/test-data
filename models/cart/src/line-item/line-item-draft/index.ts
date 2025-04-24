import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatLineItemModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const LineItemDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const LineItemDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
/**
 * @deprecated Use `LineItemDraftRest` or `LineItemDraftGraphql` instead.
 */
export const LineItemDraft = {
  random: CompatLineItemModelBuilder,
  presets: modelPresets.compatPresets,
};
