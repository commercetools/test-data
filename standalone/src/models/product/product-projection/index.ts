import * as modelBuilders from './builders';
import * as modelPresets from './presets';

export * from './types';

export const ProductProjectionRest = {
  random: modelBuilders.RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductProjectionGraphql = {
  random: modelBuilders.GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
