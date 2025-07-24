import * as emptyPresets from './empty';
import * as minimalPresets from './minimal';
import * as withValuePresets from './with-value';

export const restPresets = {
  empty: emptyPresets.restPreset,
  minimal: minimalPresets.restPreset,
  withValue: withValuePresets.restPreset,
};

export const graphqlPresets = {
  empty: emptyPresets.graphqlPreset,
  minimal: minimalPresets.graphqlPreset,
  withValue: withValuePresets.graphqlPreset,
};

export const compatPresets = {
  empty: emptyPresets.compatPreset,
  minimal: minimalPresets.compatPreset,
  withValue: withValuePresets.compatPreset,
};
