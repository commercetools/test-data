import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export const TextLineItemRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const TextLineItemGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
