import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ProductTailoringPresets from './presets';
export * from './types';

export const ProductTailoringRest = {
  random: RestModelBuilder,
  presets: ProductTailoringPresets.restPresets,
};

export const ProductTailoringGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductTailoringPresets.graphqlPresets,
};
