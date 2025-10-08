import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export * from './types';

export const ZoneRateRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const ZoneRateGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `ZoneRateRest` or `ZoneRateGraphql` exported models instead of `ZoneRate`.
 */
export const ZoneRate = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};
