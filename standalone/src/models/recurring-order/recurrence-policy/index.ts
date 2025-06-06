import { GraphqlModelBuilder } from './builders';
import * as RecurrencePolicyPresets from './presets';
export * from './recurrence-policy-draft';
export * from './types';

export const RecurrencePolicyGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyPresets.graphqlPresets,
};
