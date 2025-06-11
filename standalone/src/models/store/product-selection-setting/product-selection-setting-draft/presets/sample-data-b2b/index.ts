import * as defaultProductSelection from './default-product-selection';
import * as usMediumCustomersCatalogProductSelection from './us-medium-customers-catalog-product-selection';

export const restPresets = {
  defaultProductSelection: defaultProductSelection.restPreset,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.restPreset,
};

export const graphqlPresets = {
  defaultProductSelection: defaultProductSelection.graphqlPreset,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.graphqlPreset,
};

export const compatPresets = {
  defaultProductSelection: defaultProductSelection.compatPreset,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.compatPreset,
};
