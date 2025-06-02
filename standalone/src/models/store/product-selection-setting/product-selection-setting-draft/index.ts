import {
  GraphqlModelBuilder,
  RestModelBuilder,
  CompatModelBuilder,
} from './builder';
import * as modelPresets from './presets';

export const restPresets = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};
export const graphqlPresets = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
export const compatPresets = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
