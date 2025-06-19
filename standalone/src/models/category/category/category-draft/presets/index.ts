import * as changeHistoryDataPresets from './change-history-data';
import * as withNoParentPresets from './change-history-data/with-no-parent';
import * as emptyPresets from './empty/empty';
import sampleDataB2B from './sample-data-b2b';
import sampleDataB2CLifestyle from './sample-data-b2c-lifestyle';
import sampleDataFashion from './sample-data-fashion';

export const restPresets = {
  changeHistoryData: changeHistoryDataPresets.restPresets,
  empty: emptyPresets.restPreset,
  sampleDataB2B,
  sampleDataB2CLifestyle,
  sampleDataFashion,
  withNoParent: withNoParentPresets.restPreset,
};
export const graphqlPresets = {
  changeHistoryData: changeHistoryDataPresets.graphqlPresets,
  empty: emptyPresets.graphqlPreset,
  sampleDataB2B,
  sampleDataB2CLifestyle,
  sampleDataFashion,
  withNoParent: withNoParentPresets.graphqlPreset,
};
export const compatPresets = {
  changeHistoryData: changeHistoryDataPresets.compatPresets,
  empty: emptyPresets.compatPreset,
  sampleDataB2B,
  sampleDataB2CLifestyle,
  sampleDataFashion,
  withNoParent: withNoParentPresets.compatPreset,
};
