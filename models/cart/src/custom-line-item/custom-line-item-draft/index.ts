import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatCustomLineItemDraftModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const CustomLineItemDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const CustomLineItemDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated use `CustomLineItemDraftRest` or `CustomLineItemDraftGraphql` instead
 */
export const CustomLineItemDraft = {
  random: CompatCustomLineItemDraftModelBuilder,
  presets: modelPresets.compatPresets,
};
