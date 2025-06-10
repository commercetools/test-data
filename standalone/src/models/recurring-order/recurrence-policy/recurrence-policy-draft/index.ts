import { GraphqlModelBuilder } from './builders';
import * as RecurrencePolicyDraftPresets from './presets';

// TODO : Add rest model once recurring orders is available in Public Beta

export const RecurrencePolicyDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyDraftPresets.graphqlPresets,
};
