import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ImageDimensionsDraftPresets from './presets';

export const ImageDimensionsDraftRest = {
  random: RestModelBuilder,
  presets: ImageDimensionsDraftPresets.restPresets,
};

export const ImageDimensionsDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: ImageDimensionsDraftPresets.graphqlPresets,
};
