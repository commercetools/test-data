import * as changeHistoryData from './change-history-data';
import * as empty from './empty';
// I commented these out in this commit, until we have the sample data in place in a new commit
// import sampleDataB2B from './sample-data-b2b';
// import sampleDataB2CLifestyle from './sample-data-b2c-lifestyle';
// import sampleDataFashion from './sample-data-fashion';

export const restPresets = {
  empty: empty.restPreset,
  changeHistoryData: changeHistoryData.restPresets,
};

export const graphqlPresets = {
  empty: empty.graphqlPreset,
  changeHistoryData: changeHistoryData.graphqlPresets,
};

export const compatPresets = {
  empty: empty.compatPreset,
  changeHistoryData: changeHistoryData.compatPresets,
};
