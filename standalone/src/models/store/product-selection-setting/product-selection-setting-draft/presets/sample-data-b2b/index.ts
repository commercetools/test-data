import * as defaultProductSelection from './default-product-selection';
import * as usMediumCustomersCatalogProductSelection from './us-medium-customers-catalog-product-selection';

export const restPresets = {
  defaultProductSelection: defaultProductSelection.defaultProductSelectionRest,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.usMediumCustomersCatalogRest,
};

export const graphqlPresets = {
  defaultProductSelection:
    defaultProductSelection.defaultProductSelectionGraphql,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.usMediumCustomersCatalogGraphql,
};

export const compatPresets = {
  defaultProductSelection: defaultProductSelection.defaultProductSelection,
  usMediumCustomersCatalogProductSelection:
    usMediumCustomersCatalogProductSelection.usMediumCustomersCatalogPreset,
};
