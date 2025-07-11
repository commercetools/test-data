import * as withCountryNoState from './with-country-no-state';
import * as withCountryUsNoState from './with-country-us-no-state';

export const restPresets = {
  withCountryNoState: withCountryNoState.restPreset,
  withCountryUsNoState: withCountryUsNoState.restPreset,
};

export const graphqlPresets = {
  withCountryNoState: withCountryNoState.graphqlPreset,
  withCountryUsNoState: withCountryUsNoState.graphqlPreset,
};

export const compatPresets = {
  withCountryNoState: withCountryNoState.compatPreset,
  withCountryUsNoState: withCountryUsNoState.compatPreset,
};
