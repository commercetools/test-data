import { GraphqlModelBuilder, RestModelBuilder } from './builders';
import * as RecurringOrderDraftPresets from './presets';

export const RecurringOrderDraftRest = {
  random: RestModelBuilder,
  presets: RecurringOrderDraftPresets.restPresets,
};

export const RecurringOrderDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurringOrderDraftPresets.graphqlPresets,
};
