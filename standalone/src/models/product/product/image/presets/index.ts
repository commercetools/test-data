import * as commercetoolsApiPlatformPresets from './commercetools-api-platform';
import * as commercetoolsPosAemPresets from './commercetools-pos-aem';
import * as emptyPresets from './empty';

export const restPresets = {
  commercetoolsApiPlatform: commercetoolsApiPlatformPresets.restPreset,
  commercetoolsPosAem: commercetoolsPosAemPresets.restPreset,
  empty: emptyPresets.restPreset,
};

export const graphqlPresets = {
  commercetoolsApiPlatform: commercetoolsApiPlatformPresets.graphqlPreset,
  commercetoolsPosAem: commercetoolsPosAemPresets.graphqlPreset,
  empty: emptyPresets.graphqlPreset,
};

export const compatPresets = {
  commercetoolsApiPlatform: commercetoolsApiPlatformPresets.compatPreset,
  commercetoolsPosAem: commercetoolsPosAemPresets.compatPreset,
  empty: emptyPresets.compatPreset,
};
