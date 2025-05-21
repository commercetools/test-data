import * as empty from './empty';
import * as sampleDataB2B from './sample-data-b2b';
import * as sampleDataB2CLifestyle from './sample-data-b2c-lifestyle';
import * as sampleDataFashion from './sample-data-fashion';

export const restPresets = {
  empty: empty.restPreset,
  sampleDataB2B: sampleDataB2B.restPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.restPresets,
  sampleDataFashion: sampleDataFashion.restPresets,
};
export const graphqlPresets = {
  empty: empty.graphqlPreset,
  sampleDataB2B: sampleDataB2B.graphqlPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.graphqlPresets,
  sampleDataFashion: sampleDataFashion.graphqlPresets,
};
export const compatPresets = {
  empty: empty.compatPreset,
  sampleDataB2B: sampleDataB2B.compatPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.compatPresets,
  sampleDataFashion: sampleDataFashion.compatPresets,
};
