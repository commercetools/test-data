import { GraphqlModelBuilder, RestModelBuilder } from './builders';
import * as counterDraftPresets from './presets';

export const CounterDraftRest = {
  random: RestModelBuilder,
  presets: counterDraftPresets.restPresets,
};

export const CounterDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: counterDraftPresets.graphqlPresets,
};
