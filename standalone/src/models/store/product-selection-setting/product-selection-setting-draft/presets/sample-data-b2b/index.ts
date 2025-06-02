import * as defaultProductSelection from './default-product-selection';
import * as usMediumCustomersCatalogProductSelection from './us-medium-customers-catalog-product-selection';

export const restPresets = {
  defaultProductSelection: defaultProductSelection.defaultProductSelectionRest,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.restPreset,
};

export const graphqlPresets = {
  defaultProductSelection:
    defaultProductSelection.defaultProductSelectionGraphql,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.graphqlPreset,
};

export const compatPresets = {
  defaultProductSelection: defaultProductSelection.defaultProductSelection,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.compatPreset,
};
