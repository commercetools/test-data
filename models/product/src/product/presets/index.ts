import * as boringGenericMilk from './boring-generic-milk';
import * as happyCowMilk from './happy-cow-milk';

export const restPresets = {
  happyCowMilk: happyCowMilk.restPreset,
  boringGenericMilk: boringGenericMilk.restPreset,
};

export const graphqlPresets = {
  happyCowMilk: happyCowMilk.graphqlPreset,
  boringGenericMilk: boringGenericMilk.graphqlPreset,
};

export const compatPresets = {
  happyCowMilk: happyCowMilk.compatPreset,
  boringGenericMilk: boringGenericMilk.compatPreset,
};
