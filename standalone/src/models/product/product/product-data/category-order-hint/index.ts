import { GraphqlModelBuilder, RestModelBuilder } from './builders';
import * as modelPresets from './presets';

export const CategoryOrderHintRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const CategoryOrderHintGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
