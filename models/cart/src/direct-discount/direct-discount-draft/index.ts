import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DirectDiscountDraftPresets from './presets';

export const DirectDiscountDraftRest = {
  random: RestModelBuilder,
  presets: DirectDiscountDraftPresets.restPresets,
};

export const DirectDiscountDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: DirectDiscountDraftPresets.graphqlPresets,
};
