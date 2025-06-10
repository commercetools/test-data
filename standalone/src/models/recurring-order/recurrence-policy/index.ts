import { GraphqlModelBuilder } from './builders';
import * as RecurrencePolicyPresets from './presets';

// TODO : Add rest model once recurring orders is available in Public Beta

export const RecurrencePolicyGraphql = {
  random: GraphqlModelBuilder,
  presets: RecurrencePolicyPresets.graphqlPresets,
};
