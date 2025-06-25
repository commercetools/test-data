import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatParcelModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ParcelRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ParcelGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated use `ParcelRest` or `ParcelGraphql` instead
 */
export const Parcel = {
  random: CompatParcelModelBuilder,
  presets: modelPresets.compatPresets,
};
