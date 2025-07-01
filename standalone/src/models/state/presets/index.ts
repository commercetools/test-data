import * as packed from './packed';
import * as shipped from './shipped';

export const restPresets = {
  packed: packed.restPreset,
  shipped: shipped.restPreset,
};
export const graphqlPresets = {
  packed: packed.graphqlPreset,
  shipped: shipped.graphqlPreset,
};
export const compatPresets = {
  packed: packed.compatPreset,
  shipped: shipped.compatPreset,
};
