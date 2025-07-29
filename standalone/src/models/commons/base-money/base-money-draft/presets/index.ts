import * as withCentPrecisionPresets from './with-cent-precision/with-cent-precision';
import * as withHighPrecisionPresets from './with-high-precision/with-high-precision';

export const graphqlPresets = {
  withCentPrecision: withCentPrecisionPresets.graphqlPreset,
  withHighPrecision: withHighPrecisionPresets.graphqlPreset,
};
