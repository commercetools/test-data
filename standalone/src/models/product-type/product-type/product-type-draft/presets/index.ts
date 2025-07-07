import * as changeHistoryDataPresets from './change-history-data';
import * as emptyPresets from './empty';

export const restPresets = {
  empty: emptyPresets.restPreset,
  changeHistoryData: changeHistoryDataPresets.restPresets,
};
export const graphqlPresets = {
  empty: emptyPresets.graphqlPreset,
  changeHistoryData: changeHistoryDataPresets.graphqlPresets,
};
export const compatPresets = {
  empty: emptyPresets.compatPreset,
  changeHistoryData: changeHistoryDataPresets.compatPresets,
};
