import * as withUsdCurrencyCode from './change-history-data';
import * as withCent from './with-cent';
import * as withCurrency from './with-currency';

export const restPresets = {
  withCent: withCent.restPreset,
  withCurrency: withCurrency.restPreset,
  withUsdCurrencyCode: withUsdCurrencyCode.restPreset,
};

export const graphqlPresets = {
  withCent: withCent.graphqlPreset,
  withCurrency: withCurrency.graphqlPreset,
  withUsdCurrencyCode: withUsdCurrencyCode.graphqlPreset,
};

export const compatPresets = {
  withCent: withCent.compatPreset,
  withCurrency: withCurrency.compatPreset,
  withUsdCurrencyCode: withUsdCurrencyCode.compatPreset,
};
