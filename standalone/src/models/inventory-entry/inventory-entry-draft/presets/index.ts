import * as changeHistoryData from './change-history-data';
import * as empty from './empty';

export const restPresets = {
  changeHistoryData: changeHistoryData.restPresets,
  empty: empty.restPreset,
};

export const graphqlPresets = {
  changeHistoryData: changeHistoryData.graphqlPresets,
  empty: empty.graphqlPreset,
};

export const compatPresets = {
  changeHistoryData: changeHistoryData.compatPresets,
  empty: empty.compatPreset,
};
