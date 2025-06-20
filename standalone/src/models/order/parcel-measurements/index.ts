import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatParcelMeasurementsModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ParcelMeasurementsRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ParcelMeasurementsGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated use `ParcelMeasurementsRest` or `ParcelMeasurementsGraphql` instead
 */
export const ParcelMeasurements = {
  random: CompatParcelMeasurementsModelBuilder,
  presets: modelPresets.compatPresets,
};
