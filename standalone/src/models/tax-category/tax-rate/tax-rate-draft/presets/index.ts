import * as changeHistoryDataPresets from './change-history-data';
import * as emptyPresets from './empty/empty';
import * as withAllFieldsPresets from './with-all-fields/with-all-fields';

export const restPresets = {
  changeHistoryData: changeHistoryDataPresets.restPresets,
  empty: emptyPresets.restPreset,
  withAllFields: withAllFieldsPresets.restPreset,
};

export const graphqlPresets = {
  changeHistoryData: changeHistoryDataPresets.graphqlPresets,
  empty: emptyPresets.graphqlPreset,
  withAllFields: withAllFieldsPresets.graphqlPreset,
};

export const compatPresets = {
  changeHistoryData: changeHistoryDataPresets.compatPresets,
  empty: emptyPresets.compatPreset,
  withAllFields: withAllFieldsPresets.compatPreset,
};
