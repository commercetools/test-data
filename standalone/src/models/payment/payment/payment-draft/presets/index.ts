import * as changeHistoryDataPresets from './change-history-data';
import * as emptyPresets from './empty';

export const restPresets = {
  changeHistoryData: changeHistoryDataPresets.restPresets,
  empty: emptyPresets.restPreset,
};

export const graphqlPresets = {
  changeHistoryData: changeHistoryDataPresets.graphqlPresets,
  empty: emptyPresets.graphqlPreset,
};

export const compatPresets = {
  changeHistoryData: changeHistoryDataPresets.compatPresets,
  empty: emptyPresets.compatPreset,
};
