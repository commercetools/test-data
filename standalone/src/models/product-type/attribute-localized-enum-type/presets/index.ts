import * as allSizesPreset from './all-sizes-preset';
import * as bigSizesPreset from './big-sizes-preset';
import * as smallSizesPreset from './small-sizes-preset';

export const restPresets = {
  allSizesLenum: allSizesPreset.restPreset,
  bigSizesLenum: bigSizesPreset.restPreset,
  smallSizesLenum: smallSizesPreset.restPreset,
};

export const graphqlPresets = {
  allSizesLenum: allSizesPreset.graphqlPreset,
  bigSizesLenum: bigSizesPreset.graphqlPreset,
  smallSizesLenum: smallSizesPreset.graphqlPreset,
};

export const compatPresets = {
  allSizesLenum: allSizesPreset.compatPreset,
  bigSizesLenum: bigSizesPreset.compatPreset,
  smallSizesLenum: smallSizesPreset.compatPreset,
};
