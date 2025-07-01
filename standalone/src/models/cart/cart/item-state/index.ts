import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ItemStatePresets from './presets';

export const ItemStateRest = {
  random: RestModelBuilder,
  presets: ItemStatePresets.restPresets,
};

export const ItemStateGraphql = {
  random: GraphqlModelBuilder,
  presets: ItemStatePresets.graphqlPresets,
};
