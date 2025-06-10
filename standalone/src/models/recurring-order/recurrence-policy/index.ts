import { GraphqlModelBuilder } from './builders';
import * as RecurrencePolicyPresets from './presets';

export const RecurrencePolicyGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyPresets.graphqlPresets,
};
