import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from '../types';

export const ZoneRateDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ZoneRateDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ZoneRateDraftRest` or `ZoneRateDraftGraphql` exported models instead of `ZoneRateDraft`.
 */
export const ZoneRateDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
