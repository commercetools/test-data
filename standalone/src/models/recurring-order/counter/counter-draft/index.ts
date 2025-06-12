import { GraphqlModelBuilder } from './builders';
import * as counterDraftPresets from './presets';

// TODO : Add rest model once recurring orders is available in Public Beta

export const CounterDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: counterDraftPresets.graphqlPresets,
};
