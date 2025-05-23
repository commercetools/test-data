import * as countryOfOriginPresets from './country-of-origin-attribute-definition';
import * as numberPresets from './number-attribute-definition';
import * as sizePresets from './size-attribute-definition';

export const restPresets = {
  number: numberPresets.restPreset,
  countryOfOrigin: countryOfOriginPresets.restPreset,
  size: sizePresets.restPreset,
};

export const graphqlPresets = {
  number: numberPresets.graphqlPreset,
  countryOfOrigin: countryOfOriginPresets.graphqlPreset,
  size: sizePresets.graphqlPreset,
};

export const compatPresets = {
  number: numberPresets.compatPreset,
  countryOfOrigin: countryOfOriginPresets.compatPreset,
  size: sizePresets.compatPreset,
};
