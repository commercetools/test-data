import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const StoreDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const StoreDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `StoreDraftRest` or `StoreDraftGraphql` instead
 */

export const StoreDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
