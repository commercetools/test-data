import * as changeHistoryData from './change-history-data';
import * as empty from './empty';
import * as sampleDataB2B from './sample-data-b2b';
import * as sampleDataB2CLifestyle from './sample-data-b2c-lifestyle';
import * as sampleDataFashion from './sample-data-fashion';

export const restPresets = {
  empty: empty.restPreset,
  changeHistoryData: changeHistoryData.restPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.restPresets,
  sampleDataB2B: sampleDataB2B.restPresets,
  sampleDataFashion: sampleDataFashion.restPresets,
};

export const graphqlPresets = {
  empty: empty.graphqlPreset,
  changeHistoryData: changeHistoryData.graphqlPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.graphqlPresets,
  sampleDataB2B: sampleDataB2B.graphqlPresets,
  sampleDataFashion: sampleDataFashion.graphqlPresets,
};

export const compatPresets = {
  empty: empty.compatPreset,
  changeHistoryData: changeHistoryData.compatPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.compatPresets,
  sampleDataB2B: sampleDataB2B.compatPresets,
  sampleDataFashion: sampleDataFashion.compatPresets,
};
