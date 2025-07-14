import * as changeHistoryData from './change-history-data';
import * as withAllFields from './with-all-fields/with-all-fields';

export const restPresets = {
  changeHistoryData: changeHistoryData.restPresets,
  withAllFields: withAllFields.restPreset,
};
export const graphqlPresets = {
  changeHistoryData: changeHistoryData.graphqlPresets,
  withAllFields: withAllFields.graphqlPreset,
};
export const compatPresets = {
  changeHistoryData: changeHistoryData.compatPresets,
  withAllFields: withAllFields.compatPreset,
};
