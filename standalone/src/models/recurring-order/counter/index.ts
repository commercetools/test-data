import { GraphqlModelBuilder, RestModelBuilder } from './builders';
import * as counterPresets from './presets';

export const CounterRest = {
  random: RestModelBuilder,
  presets: counterPresets.restPresets,
};

export const CounterGraphql = {
  random: GraphqlModelBuilder,
  presets: counterPresets.graphqlPresets,
};
