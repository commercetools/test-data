import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ProductTailoringDataPresets from './presets';

export * from './product-tailoring-data-draft';

export * from './types';

export const ProductTailoringDataRest = {
  random: RestModelBuilder,
  presets: ProductTailoringDataPresets.restPresets,
};

export const ProductTailoringDataGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductTailoringDataPresets.graphqlPresets,
};
