import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as GeometryPresets from './presets';

export const GeometryRest = {
  random: RestModelBuilder,
  presets: GeometryPresets.restPresets,
};

export const GeometryGraphql = {
  random: GraphqlModelBuilder,
  presets: GeometryPresets.graphqlPresets,
};
