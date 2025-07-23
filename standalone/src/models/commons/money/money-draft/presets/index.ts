import * as changeHistoryData from './change-history-data';
import * as withCent from './with-cent';
import * as withCurrency from './with-currency';

export const restPresets = {
  withCent: withCent.restPreset,
  withCurrency: withCurrency.restPreset,
  changeHistoryData: changeHistoryData.restPresets,
};

export const graphqlPresets = {
  withCent: withCent.graphqlPreset,
  withCurrency: withCurrency.graphqlPreset,
  changeHistoryData: changeHistoryData.graphqlPresets,
};

export const compatPresets = {
  withCent: withCent.compatPreset,
  withCurrency: withCurrency.compatPreset,
  changeHistoryData: changeHistoryData.compatPresets,
};
