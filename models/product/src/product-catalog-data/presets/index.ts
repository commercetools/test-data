import * as boringGenericMilkProductCatalogData from './boring-generic-milk-product-catalog-data';
import * as happyCowMilkProductCatalogData from './happy-cow-milk-product-catalog-data';

export const restPresets = {
  boringGenericMilkProductCatalogData:
    boringGenericMilkProductCatalogData.restPreset,
  happyCowMilkProductCatalogData: happyCowMilkProductCatalogData.restPreset,
};
export const graphqlPresets = {
  boringGenericMilkProductCatalogData:
    boringGenericMilkProductCatalogData.graphqlPreset,
  happyCowMilkProductCatalogData: happyCowMilkProductCatalogData.graphqlPreset,
};
