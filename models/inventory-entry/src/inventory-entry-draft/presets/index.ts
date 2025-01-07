import * as changeHistoryData from './change-history-data';
import * as empty from './empty';
import * as sampleDataB2B from './sample-data-b2b';
import * as sampleDataB2CLifestyle from './sample-data-b2c';

export const restPresets = {
  changeHistoryData: changeHistoryData.restPresets,
  empty: empty.restPreset,
  sampleDataB2B: sampleDataB2B.restPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.restPresets,
};

export const graphqlPresets = {
  changeHistoryData: changeHistoryData.graphqlPresets,
  empty: empty.graphqlPreset,
  sampleDataB2B: sampleDataB2B.graphqlPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.graphqlPresets,
};

export const compatPresets = {
  changeHistoryData: changeHistoryData.compatPresets,
  empty: empty.compatPreset,
  sampleDataB2B: sampleDataB2B.compatPresets,
  sampleDataB2CLifestyle: sampleDataB2CLifestyle.compatPresets,
};
