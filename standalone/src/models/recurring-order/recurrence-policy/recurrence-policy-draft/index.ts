import { GraphqlModelBuilder, RestModelBuilder } from './builders';
import * as RecurrencePolicyDraftPresets from './presets';

export const RecurrencePolicyDraftRest = {
  random: RestModelBuilder,
  presets: RecurrencePolicyDraftPresets.restPresets,
};

export const RecurrencePolicyDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyDraftPresets.graphqlPresets,
};
