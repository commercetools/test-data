import { GraphqlModelBuilder } from './builders';
import * as RecurrencePolicyDraftPresets from './presets';

export const RecurrencePolicyDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyDraftPresets.graphqlPresets,
};
