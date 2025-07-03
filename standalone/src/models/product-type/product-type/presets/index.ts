import * as milkPresets from './milk';
import * as tshirtPresets from './tshirt';

export const restPresets = {
  milk: milkPresets.restPreset,
  tshirt: tshirtPresets.restPreset,
};

export const graphqlPresets = {
  milk: milkPresets.graphqlPreset,
  tshirt: tshirtPresets.graphqlPreset,
};

export const compatPresets = {
  milk: milkPresets.compatPreset,
  tshirt: tshirtPresets.compatPreset,
};
