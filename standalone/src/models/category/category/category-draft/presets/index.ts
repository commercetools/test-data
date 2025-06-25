import * as changeHistoryDataPresets from './change-history-data';
import * as withNoParentPresets from './change-history-data/with-no-parent';
import * as emptyPresets from './empty/empty';

export const restPresets = {
  changeHistoryData: changeHistoryDataPresets.restPresets,
  empty: emptyPresets.restPreset,
  withNoParent: withNoParentPresets.restPreset,
};
export const graphqlPresets = {
  changeHistoryData: changeHistoryDataPresets.graphqlPresets,
  empty: emptyPresets.graphqlPreset,
  withNoParent: withNoParentPresets.graphqlPreset,
};
export const compatPresets = {
  changeHistoryData: changeHistoryDataPresets.compatPresets,
  empty: emptyPresets.compatPreset,
  withNoParent: withNoParentPresets.compatPreset,
};
