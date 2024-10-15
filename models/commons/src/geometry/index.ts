import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as GeometryPresets from './presets';

export const GeometryRest = {
  random: RestModelBuilder,
  presets: GeometryPresets.restPresets,
};

export const GeometryGraphql = {
  random: GraphqlModelBuilder,
  presets: GeometryPresets.graphqlPresets,
};

/**
 * @deprecated Use `GeometryRest` or `GeometryGraphql` instead.
 */
export const Geometry = {
  random: CompatModelBuilder,
  presets: GeometryPresets.compatPresets,
};
