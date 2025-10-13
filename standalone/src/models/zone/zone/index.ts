import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ZoneRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ZoneGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ZoneRest` or `ZoneGraphql` instead.
 */
export const Zone = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
