import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedLineItemPortionDraftPresets from './presets';

export const DiscountedLineItemPortionDraftRest = {
  random: RestModelBuilder,
  presets: DiscountedLineItemPortionDraftPresets.restPresets,
};

export const DiscountedLineItemPortionDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedLineItemPortionDraftPresets.graphqlPresets,
};
