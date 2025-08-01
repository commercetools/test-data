import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ImageRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ImageGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ImageRest` or `ImageGraphql` exported models instead of `Image`.
 */
export const Image = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
