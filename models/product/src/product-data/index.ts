import { GraphqlModelBuilder, RestModelBuilder } from './builder';
import * as modelPresets from './presets';

export * from './types';

export const ProductDataRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductDataGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
