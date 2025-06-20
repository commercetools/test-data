import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatParcelMeasurementsModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ParcelMeasurementsRest = {
  random: RestModelBuilder,
};

export const ParcelMeasurementsGraphql = {
  random: GraphqlModelBuilder,
};

/**
 * @deprecated use `ParcelMeasurementsRest` or `ParcelMeasurementsGraphql` instead
 */
export const ParcelMeasurements = {
  random: CompatParcelMeasurementsModelBuilder,
  presets: modelPresets.default,
};
