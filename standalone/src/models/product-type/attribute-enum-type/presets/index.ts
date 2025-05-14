import * as allSizesEnumPresets from './all-sizes-enum';
import * as bigSizesEnumPresets from './big-sizes-enum';
import * as smallSizesEnumPresets from './small-sizes-enum';

export const restPresets = {
  allSizesEnum: allSizesEnumPresets.restPreset,
  smallSizesEnum: smallSizesEnumPresets.restPreset,
  bigSizesEnum: bigSizesEnumPresets.restPreset,
};

export const graphqlPresets = {
  allSizesEnum: allSizesEnumPresets.graphqlPreset,
  smallSizesEnum: smallSizesEnumPresets.graphqlPreset,
  bigSizesEnum: bigSizesEnumPresets.graphqlPreset,
};

export const compatPresets = {
  allSizesEnum: allSizesEnumPresets.compatPreset,
  smallSizesEnum: smallSizesEnumPresets.compatPreset,
  bigSizesEnum: bigSizesEnumPresets.compatPreset,
};
