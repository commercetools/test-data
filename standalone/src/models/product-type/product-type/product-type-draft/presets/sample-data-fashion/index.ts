import * as accessoriesPresets from './accessories';
import * as dressesPresets from './dresses';
import * as jacketsPresets from './jackets';
import * as pantsPresets from './pants';
import * as shirtsPresets from './shirts';

export const restPresets = {
  accessories: accessoriesPresets.restPreset,
  dresses: dressesPresets.restPreset,
  jackets: jacketsPresets.restPreset,
  pants: pantsPresets.restPreset,
  shirts: shirtsPresets.restPreset,
};

export const graphqlPresets = {
  accessories: accessoriesPresets.graphqlPreset,
  dresses: dressesPresets.graphqlPreset,
  jackets: jacketsPresets.graphqlPreset,
  pants: pantsPresets.graphqlPreset,
  shirts: shirtsPresets.graphqlPreset,
};

export const compatPresets = {
  accessories: accessoriesPresets.compatPreset,
  dresses: dressesPresets.compatPreset,
  jackets: jacketsPresets.compatPreset,
  pants: pantsPresets.compatPreset,
  shirts: shirtsPresets.compatPreset,
};
