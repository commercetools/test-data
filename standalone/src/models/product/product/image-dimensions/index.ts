import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ImageDimensionsPresets from './presets';

export const ImageDimensionsRest = {
  random: RestModelBuilder,
  presets: ImageDimensionsPresets.restPresets,
};

export const ImageDimensionsGraphql = {
  random: GraphqlModelBuilder,
  presets: ImageDimensionsPresets.graphqlPresets,
};
