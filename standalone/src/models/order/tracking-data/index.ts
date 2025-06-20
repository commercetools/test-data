import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatTrackingDataModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const TrackingDataRest = {
  random: RestModelBuilder,
  presets: modelPresets.default,
};

export const TrackingDataGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.default,
};

/**
 * @deprecated use `TrackingDataRest` or `TrackingDataGraphql` instead
 */
export const TrackingData = {
  random: CompatTrackingDataModelBuilder,
  presets: modelPresets.default,
};
