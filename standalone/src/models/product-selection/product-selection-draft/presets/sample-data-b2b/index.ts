import * as defaultProductSelection from './default-product-selection';
import * as usMediumCustomersCatalog from './us-medium-customers-catalog';

export const restPresets = {
  usMediumCustomersCatalog: usMediumCustomersCatalog.restPreset,
  defaultProductSelection: defaultProductSelection.restPreset,
};

export const graphqlPresets = {
  usMediumCustomersCatalog: usMediumCustomersCatalog.graphqlPreset,
  defaultProductSelection: defaultProductSelection.graphqlPreset,
};

export const compatPresets = {
  usMediumCustomersCatalog: usMediumCustomersCatalog.compatPreset,
  defaultProductSelection: defaultProductSelection.compatPreset,
};
