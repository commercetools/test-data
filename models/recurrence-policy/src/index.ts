import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as RecurrencePolicyPresets from './presets';
export * from './recurrence-policy-draft';
export * from './types';

export const RecurrencePolicyRest = {
  random: RestModelBuilder,
  presets: RecurrencePolicyPresets.restPresets,
};

export const RecurrencePolicyGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyPresets.graphqlPresets,
};
