import * as withCountryCodeUsNoStatePresets from './with-country-code-us-no-state';
import * as withCountryCodeUsNoStateIncludedInPricePresets from './with-country-code-us-no-state-included-in-price';

export const restPresets = {
  withCountryCodeUsNoState: withCountryCodeUsNoStatePresets.restPreset,
  withCountryCodeUsNoStateIncludedInPrice:
    withCountryCodeUsNoStateIncludedInPricePresets.restPreset,
};

export const graphqlPresets = {
  withCountryCodeUsNoState: withCountryCodeUsNoStatePresets.graphqlPreset,
  withCountryCodeUsNoStateIncludedInPrice:
    withCountryCodeUsNoStateIncludedInPricePresets.graphqlPreset,
};

export const compatPresets = {
  withCountryCodeUsNoState: withCountryCodeUsNoStatePresets.compatPreset,
  withCountryCodeUsNoStateIncludedInPrice:
    withCountryCodeUsNoStateIncludedInPricePresets.compatPreset,
};
