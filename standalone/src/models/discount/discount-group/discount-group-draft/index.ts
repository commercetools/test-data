import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountGroupDraftPresets from './presets';

export const DiscountGroupDraftRest = {
  random: RestModelBuilder,
  presets: DiscountGroupDraftPresets.restPresets,
};

export const DiscountGroupDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountGroupDraftPresets.graphqlPresets,
};
