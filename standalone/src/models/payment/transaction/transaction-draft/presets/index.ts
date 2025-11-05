import * as withUsdCurrencyCodePresets from './change-history-data/with-usd-currency-code';
import * as emptyPresets from './empty';

export const restPresets = {
  empty: emptyPresets.restPreset,
  changeHistoryData: {
    withUsdCurrencyCode: withUsdCurrencyCodePresets.restPreset,
  },
};
export const graphqlPresets = {
  empty: emptyPresets.graphqlPreset,
  changeHistoryData: {
    withUsdCurrencyCode: withUsdCurrencyCodePresets.graphqlPreset,
  },
};
export const compatPresets = {
  empty: emptyPresets.compatPreset,
  changeHistoryData: {
    withUsdCurrencyCode: withUsdCurrencyCodePresets.compatPreset,
  },
};
