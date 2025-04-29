import { GraphqlModelBuilder, RestModelBuilder } from './builder';
import * as modelPresets from './presets';

export * from './types';

export const ProductCatalogDataRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductCatalogDataGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
