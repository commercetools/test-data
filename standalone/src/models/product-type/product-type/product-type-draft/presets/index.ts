import * as changeHistoryDataPresets from './change-history-data';
import * as emptyPresets from './empty';
import * as sampleDataB2BPresets from './sample-data-b2b';
import * as sampleDataB2cLifestylePresets from './sample-data-b2c-lifestyle';
import * as sampleDataFashionPresets from './sample-data-fashion';

export const restPresets = {
  empty: emptyPresets.restPreset,
  changeHistoryData: changeHistoryDataPresets.restPresets,
  sampleDataB2B: sampleDataB2BPresets.restPresets,
  sampleDataB2CLifestyle: sampleDataB2cLifestylePresets.restPresets,
  sampleDataFashion: sampleDataFashionPresets.restPresets,
};
export const graphqlPresets = {
  empty: emptyPresets.graphqlPreset,
  changeHistoryData: changeHistoryDataPresets.graphqlPresets,
  sampleDataB2B: sampleDataB2BPresets.graphqlPresets,
  sampleDataB2CLifestyle: sampleDataB2cLifestylePresets.graphqlPresets,
  sampleDataFashion: sampleDataFashionPresets.graphqlPresets,
};
export const compatPresets = {
  empty: emptyPresets.compatPreset,
  changeHistoryData: changeHistoryDataPresets.compatPresets,
  sampleDataB2B: sampleDataB2BPresets.compatPresets,
  sampleDataB2CLifestyle: sampleDataB2cLifestylePresets.compatPresets,
  sampleDataFashion: sampleDataFashionPresets.compatPresets,
};
