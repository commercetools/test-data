import * as changeHistoryData from './change-history-data';
import * as empty from './empty';

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
