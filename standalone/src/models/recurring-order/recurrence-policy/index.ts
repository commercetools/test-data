import { GraphqlModelBuilder, RestModelBuilder } from './builders';
import * as RecurrencePolicyPresets from './presets';

export const RecurrencePolicyRest = {
  random: RestModelBuilder,
  presets: RecurrencePolicyPresets.restPresets,
};

export const RecurrencePolicyGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyPresets.graphqlPresets,
};
