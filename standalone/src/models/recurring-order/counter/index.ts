import { GraphqlModelBuilder } from './builders';
import * as counterPresets from './presets';

// TODO : Add rest model once recurring orders is available in Public Beta

export const CounterGraphql = {
  random: GraphqlModelBuilder,
  presets: counterPresets.graphqlPresets,
};
