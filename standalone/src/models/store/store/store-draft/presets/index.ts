import * as empty from './empty';
import * as sampleDataB2B from './sample-data-b2b';
import * as sampleDataB2CLifestyle from './sample-data-b2c-lifestyle';
import * as sampleDataFashion from './sample-data-fashion';

export const restPresets = {
  empty: empty.restPreset,
  sampleDataFashion: sampleDataFashion.restPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.restPresets,
  sampleDataB2B: sampleDataB2B.restPresets,
};

export const graphqlPresets = {
  empty: empty.graphqlPreset,
  sampleDataFashion: sampleDataFashion.graphqlPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.graphqlPresets,
  sampleDataB2B: sampleDataB2B.graphqlPresets,
};

export const compatPresets = {
  empty: empty.compatPreset,
  sampleDataFashion: sampleDataFashion.compatPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.compatPresets,
  sampleDataB2B: sampleDataB2B.compatPresets,
};
