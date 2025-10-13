import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ZoneDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ZoneDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ZoneDraftRest` or `ZoneDraftGraphql` instead.
 */
export const ZoneDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
