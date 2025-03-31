import * as customLineItemWithUsdCurrencyCode from './with-usd-currency-code';

export const restPresets = {
  withCustomLineItem: customLineItemWithUsdCurrencyCode.restPreset,
};

export const graphqlPresets = {
  withCustomLineItem: customLineItemWithUsdCurrencyCode.graphqlPreset,
};

export const compatPresets = {
  withCustomLineItem: customLineItemWithUsdCurrencyCode.compatPreset,
};
