import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ProductTailoringDataDraftPresets from './presets';

export const ProductTailoringDataDraftRest = {
  random: RestModelBuilder,
  presets: ProductTailoringDataDraftPresets.restPresets,
};

export const ProductTailoringDataDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: ProductTailoringDataDraftPresets.graphqlPresets,
};
